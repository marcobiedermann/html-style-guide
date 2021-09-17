import React, { HTMLAttributes, ReactNode } from 'react';
import { footer } from './footer.module.css';

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Footer(props: FooterProps): JSX.Element {
  return <footer className={footer} {...props} />;
}

export default Footer;
