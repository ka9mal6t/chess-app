import {type FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps{
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}
const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    const isCapture = cell.available && !!cell.figure;

    return (
        <div className={[
            'cell',
            cell.color,
            selected ? 'selected' : '',
            cell.isKingUnderCheck() ? 'isKingUnderCheck' : '',
            cell.available ? 'move-available' : '',
            isCapture ? 'capture-highlight' : '',
        ].filter(Boolean).join(' ')}
             onClick={() => click(cell)}
        >
            {cell.available && !cell.figure && <div className={'available'}/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
};

export default CellComponent;