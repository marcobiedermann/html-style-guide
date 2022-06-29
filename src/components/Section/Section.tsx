import React, { HTMLAttributes, ReactNode } from 'react';
import { section } from './section.module.css';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Section(props: SectionProps): JSX.Element {
  return <section className={section} {...props} />;
}

export type { SectionProps };
export default Section;
