import React, { HTMLAttributes, ReactNode } from 'react';
import { grid } from './grid.module.css';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Grid(props: GridProps): JSX.Element {
  return <div className={grid} {...props} />;
}

export type { GridProps };
export default Grid;
