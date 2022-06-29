import React, { HTMLAttributes, ReactNode } from 'react';
import { column } from './column.module.css';

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Column(props: ColumnProps): JSX.Element {
  return <div className={column} {...props} />;
}

export type { ColumnProps };
export default Column;
