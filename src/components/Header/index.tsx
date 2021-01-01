import React, { FC } from 'react';
import stlyes from './header.module.css';

const Header: FC = (props) => <header className={stlyes.header} {...props} />;

export default Header;
