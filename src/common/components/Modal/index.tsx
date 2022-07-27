import React, { useRef } from 'react';
import Icons from '../Icons';
import './Style.scss';

type Prop = {
    children: JSX.Element | JSX.Element[];
    closeHandler: () => void;
    maxWidth?: number;
    title?: string;
};

const Modal = ({ children, maxWidth, closeHandler, title }: Prop) => {
    const modalContentEl = useRef<HTMLDivElement>(null);

    const detectOutsideClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const element = event.target as HTMLDivElement;
        if (modalContentEl.current && !modalContentEl.current.contains(element)) {
            closeHandler();
        }
    };

    return (
        <div className="modal-container" data-testid="modal">
            <button type="button" className="modal-overlay" onClick={detectOutsideClickHandler} />
            <div
                className="modal-dialog"
                role="document"
                style={{ maxWidth }}
                data-testid="modal-dialog"
                ref={modalContentEl}
            >
                <div className="modal-wrapper">
                    <div className="modal-content">
                        <div className="modal-header">
                            {title && <h2 className="mb-3 mt-0">{title}</h2>}
                            {closeHandler && (
                                <button
                                    data-testid="modal-close-btn"
                                    type="button"
                                    onClick={closeHandler}
                                    className="modal-close-btn"
                                    aria-label="close"
                                >
                                    <Icons name="x" />
                                </button>
                            )}
                        </div>
                        <div className="modal-body">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.defaultProps = {
    maxWidth: 720,
    title: '',
};

export default Modal;
