import { type FC, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    message: string | null;
    handleClose: () => void;
}

const MessageComponent: FC<ModalProps> = ({ isOpen, message, handleClose}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // блокируем прокрутку
        } else {
            document.body.style.overflow = 'auto'; // разблокируем прокрутку
        }
    }, [isOpen]);


    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content winner-modal">
                <h2 className="winner-title">{message?.toUpperCase()}</h2>
                <div className="centered-button-container">
                    <button className="centered-button" onClick={handleClose}>OK</button>
                </div>
            </div>
        </div>
);
};

export default MessageComponent;
