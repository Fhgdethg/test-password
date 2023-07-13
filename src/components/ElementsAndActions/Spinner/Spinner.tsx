import React from 'react';

import s from './Spinner.module.scss';

interface ISpinnerProps {
  size?: number;
  isCover?: boolean;
  isFixed?: boolean;
  isOverlayWhite?: boolean;
  className?: string;
}

const Spinner: React.FC<ISpinnerProps> = ({
  size = 38,
  isCover = false,
  isFixed = false,
  className,
  isOverlayWhite = false,
}) => {
  const classes = `${s.spinner_overlay} ${className} ${
    isCover ? s.cover : ''
  } ${isFixed ? s.fixed : ''} ${isOverlayWhite ? s.white : ''}`;

  return (
    <div className={classes}>
      <div
        className={s.lds_ring}
        style={{
          width: size,
          height: size,
        }}
      >
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              style={{
                width: size,
                height: size,
                borderWidth: size / 10,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Spinner;
