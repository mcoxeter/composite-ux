import * as React from 'react';
import styles from './Inline.module.scss';
export interface InlineProps {    
    alignVertical?: 'center' | 'flex-end' | 'flex-start' | 'stretch';
}

export const Inline: React.FC<InlineProps> = (props) => {
    const {
        alignVertical = 'flex-start',
    } = props;

    const className = [styles['component']].join(' ');

    return (
        <div className={className} 
            style={{
                alignItems: alignVertical,
            }}>
            {props.children}
        </div>
    );
}