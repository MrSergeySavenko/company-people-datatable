import React from 'react';
import styles from './TextArea.module.scss';

interface IProp {
    children: string;
}

export const TextAria: React.FC<IProp> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.header}>{children}</p>
        </div>
    );
};
