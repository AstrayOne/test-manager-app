import React from 'react';
import { bool } from 'prop-types';
import classes from 'classnames';

import s from './Loader.scss';

const Loader = ({ isNormal }) => {
  return (
    <div
      className={classes(s.root, {
        [s.isNormal]: isNormal,
      })}
    >
      <div className={s.circle} />
    </div>
  );
};

Loader.propTypes = {
  isNormal: bool,
};

export default Loader;
