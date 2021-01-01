import React, { FC } from 'react';
import stlyes from './main.module.css';

const Main: FC = (props) => <main className={stlyes.main} {...props} />;

export default Main;
