import React, { FC } from 'react';
import stlyes from './grid.module.css';

const Grid: FC = (props) => <div className={stlyes.grid} {...props} />;

export default Grid;
