import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './section.module.css';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Section(props: SectionProps): JSX.Element {
  return <section className={styles.section} {...props} />;
}

export default Section;
