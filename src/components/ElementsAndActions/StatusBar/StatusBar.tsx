import React from 'react';
import cN from 'classnames';

import s from './StatusBar.module.scss';

interface IStatusBarProps {
  customStatusCl?: string;
}

const StatusBar: React.FC<IStatusBarProps> = ({ customStatusCl }) => {
  return <div className={cN(s.status_bar, customStatusCl)}></div>;
};

export default StatusBar;
