import {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {
    const [board, setBoard] = useState(new Board());
    const whitePlayer = new Player(Colors.WHITE);
    const blackPlayer = new Player(Colors.BLACK);
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
    const [timerStop, setTimerStop] = useState<boolean>(false);

    useEffect(() => {
        restart();
        setCurrentPlayer(whitePlayer);
    }, []);

    function restart(){
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
        setCurrentPlayer(whitePlayer);
        setTimerStop(false);
    }

    function swapPlayer(): Colors{
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
        return currentPlayer?.color === Colors.WHITE ? Colors.BLACK : Colors.WHITE;
    }

    return (
        <div className="app">
            <div className="game-layout">
                <div className="side-panel">
                    <LostFigures
                        title={"Black"}
                        figures={board.lostBlackFigures}/>

                    <LostFigures
                        title={"White"}
                        figures={board.lostWhiteFigures}/>
                </div>

                <div className="board-column">
                    <Timer
                        currentPlayer={currentPlayer}
                        restart={restart}
                        timerStop={timerStop}
                        setTimerStop={setTimerStop}
                    />
                    <BoardComponent
                        board={board}
                        setBoard={setBoard}
                        currentPlayer={currentPlayer}
                        swapPlayer={swapPlayer}
                        timerStop={timerStop}
                        setTimerStop={setTimerStop}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
