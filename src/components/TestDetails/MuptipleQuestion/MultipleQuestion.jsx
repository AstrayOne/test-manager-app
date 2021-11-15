import React, { useState, useEffect } from 'react';

import s from './MultipleQuestion.scss';
import { func, object } from 'prop-types';

import CheckBox from './CheckBox';

const MultipleQuestion = ({ data, onChange }) => {
  const setStartValues = answers => {
    const startValues = {};
    answers.forEach(answer => {
      startValues[answer.id] = false;
    });
    return startValues;
  };

  const checkAnswers = answers => {
    for (var key in answers) {
      if (answers[key] === false) {
        return false;
      }
    }
    return true;
  };

  const [checkBoxes, setCheckBoxes] = useState(setStartValues(data.answers));

  const handleChange = (id, isRight) => {
    setCheckBoxes({ ...checkBoxes, [id]: isRight });
  };

  useEffect(() => {
    onChange(data.id, checkAnswers(checkBoxes));
  }, [checkBoxes]);

  console.log(checkBoxes);
  return (
    <div className={s.root}>
      <div className={s.title}>{data.title}</div>
      <div className={s.answers}>
        {data.answers.map(answer => (
          <CheckBox
            text={answer.text}
            onChange={handleChange}
            id={answer.id}
            isRight={answer.is_right}
          />
        ))}
      </div>
    </div>
  );
};

MultipleQuestion.propTypes = {
  data: object,
  onChange: func,
};

MultipleQuestion.defaultProps = {
  data: object,
  onChange: func,
};

export default MultipleQuestion;
