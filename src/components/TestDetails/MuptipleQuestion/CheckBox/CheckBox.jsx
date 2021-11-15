import React, { useState } from 'react';

import useComponentDidMount from 'hooks/useComponentDidMount';

import s from './CheckBox.scss';
import { string, func, number, bool } from 'prop-types';

const CheckBox = ({ text, onChange, id, isRight }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = event => {
    onChange(id, isRight === event.target.checked);
    setChecked(!checked);
  };

  useComponentDidMount(() => {
    onChange(id, isRight === checked);
  });

  return (
    <div className={s.root}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <div className={s.text}>{text}</div>
    </div>
  );
};

CheckBox.propTypes = {
  text: string,
  onChange: func,
  id: number,
  isRight: bool,
};

CheckBox.defaultProps = {
  text: '',
  onChange: '',
  id: 0,
  isRight: false,
};

export default CheckBox;
