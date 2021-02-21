import * as React from 'react';
import styles from './PrimaryButton.module.scss';

export const PrimaryButton: React.FC<{}> = () => {
    return (<button className={styles['component']} type={'button'}>Primary Button</button>);
}