import React, { FC } from 'react';
import * as styles from './grid.module.css';

const Grid: FC = (props) => <div className={styles.grid} {...props} />;

export default Grid;
