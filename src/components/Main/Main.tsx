import React, { HTMLAttributes, ReactNode } from 'react';
import { main } from './main.module.css';

interface MainProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Main(props: MainProps): JSX.Element {
  return <main className={main} {...props} />;
}

export type { MainProps };
export default Main;
