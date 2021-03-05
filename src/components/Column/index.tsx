import React, { FC } from 'react';
import * as styles from './column.module.css';

const Column: FC = (props) => <div className={styles.column} {...props} />;

export default Column;
