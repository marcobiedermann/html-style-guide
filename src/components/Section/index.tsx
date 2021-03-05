import React, { FC } from 'react';
import * as styles from './section.module.css';

interface SectionProps {
  id?: string;
}

const Section: FC<SectionProps> = (props) => <section className={styles.section} {...props} />;

export default Section;
