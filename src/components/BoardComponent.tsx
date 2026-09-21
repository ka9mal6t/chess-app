import {type FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import CellComponent from "./CellComponent";
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";
import {FigureNames} from "../models/figures/Figure";
import ChooseFigureComponent from "../modal/ChooseFigureComponent";
import MessageComponent from "../modal/MessageComponent";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => Colors;
    timerStop: boolean;
    setTimerStop: (stop: boolean) => void;
}
const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer, timerStop, setTimerStop}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
    const [showChooseModal, setShowChooseModal] = useState(false);
    const [messageModal, setMessageModal] = useState<string | null>(null);
    const [resultModal, setResultModal] = useState<boolean>(true);
    const [modalShown, setModalShown] = useState<boolean>(false);
    const[lastCell, setLastCell] = useState<Cell | null>(null)

    const handleSelectFigure = (figureName: FigureNames) => {
        if (lastCell) {
            lastCell.pawnUp(lastCell, figureName);
            setShowChooseModal(false);
        }
    };

    useEffect(() => {
        if (!timerStop) {
            setModalShown(false);
            setResultModal(true);
            setMessageModal(null);
        }
    }, [timerStop]);
    function click(cell: Cell){
        if (!timerStop) {
            if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
                selectedCell.moveFigure(cell);
                setLastCell(cell);
                if (selectedCell.checkPawnUp(cell)) {
                    setShowChooseModal(true);
                }

                setSelectedCell(null);
                const enemyColor: Colors = swapPlayer();

                if (board.staleMate(enemyColor) && resultModal && !modalShown) {
                    setTimerStop(true);
                    setMessageModal('DRAW');
                    setModalShown(true);
                }
                if (board.checkMate(enemyColor) && resultModal && !modalShown) {
                    setTimerStop(true);
                    setModalShown(true);
                    setMessageModal(enemyColor === Colors.WHITE ? 'BLACK WINS' : 'WHITE WINS');
                }
            } else {
                if (cell.figure?.color === currentPlayer?.color) {
                    setSelectedCell(cell);
                }
            }
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells(){
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard(){
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }
    return (
        <div className="board">
            {board.cells.map((row, index) => (
                <div key={index} className="board-row">
                    {row.map(cell =>
                        <CellComponent
                            click={click}
                            cell={cell}
                            key={cell.id}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </div>
            ))}
            {showChooseModal && (
                <ChooseFigureComponent
                    isOpen={showChooseModal}
                    handleClose={() => setShowChooseModal(false)}
                    handleSelectFigure={handleSelectFigure}/>
            )}
            {/* Блокировка интерактивных элементов при открытом модальном окне */}
            {showChooseModal && <div className="overlay" />}

            {modalShown && resultModal && (
                <MessageComponent
                    isOpen={modalShown}
                    handleClose={() => {
                        setResultModal(false);
                        setModalShown(false);
                        setTimerStop(true);
                    }}
                    message={messageModal}
                />
            )}
            {/* Блокировка интерактивных элементов при открытом модальном окне */}
            {modalShown && resultModal && <div className="overlay" />}
        </div>
    );

};

export default BoardComponent;