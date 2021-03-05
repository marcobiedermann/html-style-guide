import React, { FC } from 'react';
import * as styles from './content.module.css';

const Content: FC = (props) => <div className={styles.content} {...props} />;

export default Content;
