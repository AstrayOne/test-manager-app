import React from 'react';

import cx from 'classnames';

import s from './Radio.scss';
import { string, func, number } from 'prop-types';
const Radio = ({ text, onChange, selected, value }) => {
  return (
    <div
      className={s.root}
      onClick={() => {
        onChange(value);
      }}
    >
      <div
        className={cx(s.outerCircle, { [s.unselected]: value !== selected })}
      >
        <div
          className={cx(s.innerCircle, {
            [s.unselectedCircle]: value !== selected,
          })}
        />
      </div>
      <div className={s.text}>{text}</div>
    </div>
  );
};

Radio.propTypes = {
  text: string,
  onChange: func,
  selected: number,
  value: number,
};

Radio.defaultProps = {
  text: '',
  onChange: '',
  selected: null,
  value: '',
};

export default Radio;
