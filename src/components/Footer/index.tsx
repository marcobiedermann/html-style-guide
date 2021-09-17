import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './footer.module.css';

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Footer(props: FooterProps): JSX.Element {
  return <footer className={styles.footer} {...props} />;
}

export default Footer;
