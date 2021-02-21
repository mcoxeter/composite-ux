import * as React from 'react';
import styles from './Box.module.scss';
export interface BoxProps {
    width?: string;
    height?: string;
    colorToken: ColorTokenNames;
}

export const Box: React.FC<BoxProps> = () => {
    return (<div className={styles['component']} style={{width: "100px", height: "100px", backgroundColor: "red" }}>Hello</div>);
}

export type ColorTokenNames = 
    'page-base' |
    'action-primary-default' |
    'action-disabled' |
    'action-primary-active' |
    'action-primary-hover' |
    'action-primary-focused'