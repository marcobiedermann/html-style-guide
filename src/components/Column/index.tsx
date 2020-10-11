import React, { FC } from 'react';
import stlyes from './column.module.css';

const Column: FC = (props) => {
  return <div className={stlyes.column} {...props} />;
};

export default Column;
