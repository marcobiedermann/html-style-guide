import React, { FC } from 'react';
import stlyes from './footer.module.css';

const Footer: FC = (props) => {
  return <footer className={stlyes.footer} {...props} />;
};

export default Footer;
