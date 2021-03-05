import React, { FC } from 'react';
import * as styles from './row.module.css';

const Row: FC = (props) => <div className={styles.row} {...props} />;

export default Row;
