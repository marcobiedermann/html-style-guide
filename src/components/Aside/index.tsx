import React, { FC } from 'react';
import stlyes from './aside.module.css';

const Aside: FC = (props) => {
  return <aside className={stlyes.aside} {...props} />;
};

export default Aside;
