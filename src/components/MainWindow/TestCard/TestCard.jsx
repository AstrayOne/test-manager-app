import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import s from './TestCard.scss';

import { object } from 'prop-types';
import ModalWindow from 'components/ModalWindow';

const TestCard = ({ test }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const history = useHistory();

  const handleYes = () => {
    history.push(`/tests/${test.id}`);
  };

  const handleClose = () => {
    setIsConfirmOpen(false);
  };

  const handleOpenModal = () => {
    setIsConfirmOpen(true);
  };

  return (
    <div className={s.root}>
      {isConfirmOpen && (
        <ModalWindow
          title="Хотите пройти тест?"
          submitText="Да"
          cancelText="Нет"
          onSave={handleYes}
          onClose={handleClose}
        />
      )}
      <div className={s.title} onClick={handleOpenModal}>
        {test.title}
      </div>
    </div>
  );
};

TestCard.propTypes = {
  test: object,
};

TestCard.defaultProps = {
  test: {},
};

export default TestCard;
