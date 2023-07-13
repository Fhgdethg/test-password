import React from 'react';
import cN from 'classnames'

import { IGlobalInputProps } from './GlobalInputTypes';

import s from './GlobalInput.module.scss';

const GlobalInput: React.FC<IGlobalInputProps> = ({
  label = '',
  inputProps,
  wrpClName = '',
}) => {
  const isHasInputLabel = Boolean(label.length);

  return (
    <label className={cN(s.input_wrp, wrpClName)}>
      {isHasInputLabel && <p className={s.label}>{label}</p>}
      <input type='text' {...inputProps} className={s.input} />
    </label>
  );
};

export default GlobalInput;
