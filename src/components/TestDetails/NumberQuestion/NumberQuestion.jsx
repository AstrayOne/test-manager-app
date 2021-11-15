import React, { useState } from 'react';

import s from './NumberQuestion.scss';
import { object, func } from 'prop-types';

const NumberQuestion = ({ data, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
    onChange(data.id, data.answer == event.target.value);
  };

  return (
    <div className={s.root}>
      <div className={s.title}>{data.title}</div>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

NumberQuestion.propTypes = {
  data: object,
  onChange: func,
};

NumberQuestion.defaultProps = {
  data: object,
  onChange: func,
};

export default NumberQuestion;
