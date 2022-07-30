import React, { HTMLAttributes, ReactNode } from 'react';
import { aside } from './aside.module.css';

interface AsideProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Aside(props: AsideProps): JSX.Element {
  return <aside className={aside} {...props} />;
}

export type { AsideProps };
export default Aside;
