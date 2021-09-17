import React, { HTMLAttributes, ReactNode } from 'react';
import { grid } from './grid.module.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Grid(props: GridProps): JSX.Element {
  return <div className={grid} {...props} />;
}

export default Grid;
