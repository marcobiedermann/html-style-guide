import React, { HTMLAttributes, ReactNode } from 'react';
import { footer } from './footer.module.css';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Footer(props: FooterProps): JSX.Element {
  return <footer className={footer} {...props} />;
}

export type { FooterProps };
export default Footer;
