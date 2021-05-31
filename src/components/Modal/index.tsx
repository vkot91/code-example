import React from 'react';
import ReactDOM from 'react-dom';

import { IModal } from './types';

import closeIcon from 'images/close.svg';

export const Modal: React.FC<IModal> = ({ children, closeModal }: IModal) => {
  const domEl = document.getElementById('modal-root');

  if (!domEl) return null;

  return ReactDOM.createPortal(
    <div role="Modal" className="overlay">
      <div className="modal">
        <img
          src={closeIcon}
          alt="close"
          className="modal__close"
          role="modalClose"
          onClick={closeModal}
        />
        {children}
      </div>
    </div>,
    domEl
  );
};

