import React, { FC } from 'react';
import styles from './navigation.module.css';

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="#anchor" className="is-active">
            Anchor
          </a>
        </li>
        <li>
          <a href="#attribute">Attribute</a>
        </li>
        <li>
          <a href="#comment">Comment</a>
        </li>
        <li>
          <a href="#document">Document</a>
        </li>
        <li>
          <a href="#form">Form</a>
        </li>
        <li>
          <a href="#headline">Headline</a>
        </li>
        <li>
          <a href="#image">Image</a>
        </li>
        <li>
          <a href="#link">Link</a>
        </li>
        <li>
          <a href="#selector">Selector</a>
        </li>
        <li>
          <a href="#string">String</a>
        </li>
        <li>
          <a href="#tag">Tag</a>
        </li>
        <li>
          <a href="#general">General</a>
        </li>
        <li>
          <a href="#css">CSS</a>
        </li>
        <li>
          <a href="#javascript">JavaScript</a>
        </li>
        <li>
          <a href="#tools">Tools</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
