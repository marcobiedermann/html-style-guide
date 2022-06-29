import React, { HTMLAttributes, ReactNode } from 'react';
import { header } from './header.module.css';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Header(props: HeaderProps): JSX.Element {
  return <header className={header} {...props} />;
}

export type { HeaderProps };
export default Header;
