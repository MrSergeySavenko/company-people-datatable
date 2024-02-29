import React from 'react';
import styles from './EmptyQueryData.module.scss';

export const EmptyQueryData: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img} />
            <p className={styles.text}>Мы никого не нашли</p>
            <p className={styles.underText}>Попробуй скорректировать запрос</p>
        </div>
    );
};
