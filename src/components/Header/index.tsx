import React, { FC } from 'react';
import * as styles from './header.module.css';

const Header: FC = (props) => <header className={styles.header} {...props} />;

export default Header;
