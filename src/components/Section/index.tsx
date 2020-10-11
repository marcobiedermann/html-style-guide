import React, { FC } from 'react';
import stlyes from './section.module.css';

const Section: FC = (props) => {
  return <section className={stlyes.section} {...props} />;
};

export default Section;
