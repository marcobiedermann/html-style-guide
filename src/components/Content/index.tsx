import React, { FC } from 'react';
import stlyes from './content.module.css';

const Content: FC = (props) => {
  return <div className={stlyes.content} {...props} />;
};

export default Content;
