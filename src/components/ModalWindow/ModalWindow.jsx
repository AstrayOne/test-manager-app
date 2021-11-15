import React from 'react';
import classes from 'classnames';

import useComponentDidMount from 'hooks/useComponentDidMount';

import s from './ModalWindow.scss';
import { func, string } from 'prop-types';

const ModalWindow = ({ onClose, onSave, title, submitText, cancelText }) => {
  const handleYes = () => {
    if (onSave) onSave();
    if (onClose) onClose();
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  useComponentDidMount(() => {
    const close = e => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };

    window.addEventListener('keydown', close);

    return () => {
      window.removeEventListener('keydown', close);
    };
  });

  return (
    <div className={s.root} id="modal">
      <div className={s.inner}>
        <div className={s.bg} onClick={handleClose} />
        <div className={s.content}>
          {title && <div className={classes('h3', s.title)}>{title}</div>}
          <div className={s.btns}>
            <div className={s.btn}>
              <div onClick={handleClose}>{cancelText}</div>
            </div>
            <div className={s.btn}>
              <div onClick={handleYes}>{submitText}</div>
            </div>
          </div>
          <button className={s.close} onClick={handleClose}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  onClose: func,
  onSave: func,
  title: string,
  submitText: string,
  cancelText: string,
};

ModalWindow.defaultProps = {
  onClose: null,
  onSave: null,
  title: '',
  submitText: '',
  cancelText: '',
};

export default ModalWindow;
