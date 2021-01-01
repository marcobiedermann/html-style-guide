import React, { FC } from 'react';
import stlyes from './section.module.css';

interface SectionProps {
  id?: string;
}

const Section: FC<SectionProps> = (props) => <section className={stlyes.section} {...props} />;

export default Section;
