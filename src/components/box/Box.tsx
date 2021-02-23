import * as React from 'react';
import styles from './Box.module.scss';
export interface BoxProps {
    borderRadius?: string;
    background?: ColorToken;
    backgroundOpacity?: number;


    alignItems?: 'center' | 'flex-end' | 'flex-start' | 'stretch';
    justifyContent?: 'center' | 'flex-end' | 'flex-start';

    flexDirection: 'column' | 'row'
}

export const Box: React.FC<BoxProps> = (props) => {
    const {
        alignItems = 'center',
        justifyContent = 'center',
        background = 'primary',
        flexDirection = 'row',
        backgroundOpacity = 1
    } = props;

    const className = [
        styles['component'],
        styles[background]
    ].join(' ');

    return (
        <div className={className} 
            style={{
                opacity: backgroundOpacity,
                flexDirection,
                alignItems,
                justifyContent,
                borderRadius: props.borderRadius ?? 'auto',
                }}>
                    {props.children}
        </div>
    );
}

export type ColorToken = 
    'canvas' |
    'primary' |
    'disabled';

