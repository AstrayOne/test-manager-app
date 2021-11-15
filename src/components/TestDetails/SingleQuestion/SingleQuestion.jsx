import React, { useState } from 'react';

import s from './SingleQuestion.scss';
import { object, func } from 'prop-types';

import Radio from './Radio';

const SingleQuestion = ({ data, onChange }) => {
  const [selected, setSelected] = useState(0);

  const handleCheck = value => {
    setSelected(value);
    console.log(value, selected);
    const isRight = data.answers.filter(el => el.id === value)[0].is_right;
    onChange(data.id, isRight);
  };
  return (
    <div className={s.root}>
      <div className={s.title}>{data.title}</div>
      <div className={s.answers}>
        {data.answers.map(answer => (
          <Radio
            text={answer.text}
            onChange={handleCheck}
            selected={selected}
            value={answer.id}
          />
        ))}
      </div>
    </div>
  );
};

SingleQuestion.propTypes = {
  data: object,
  onChange: func,
};

SingleQuestion.defaultProps = {
  data: object,
  onChange: func,
};

export default SingleQuestion;
