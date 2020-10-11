import React, { FC } from 'react';
import stlyes from './row.module.css';

const Row: FC = (props) => {
  return <div className={stlyes.row} {...props} />;
};

export default Row;
