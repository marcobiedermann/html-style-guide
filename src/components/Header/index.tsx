import React, { FC } from 'react';
import stlyes from './header.module.css';

const Header: FC = (props) => {
  return <header className={stlyes.header} {...props} />;
};

export default Header;
