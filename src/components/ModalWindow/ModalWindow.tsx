import React from 'react';
import styles from './ModalWindow.module.scss';

export const ModalWindow: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerWrapper}>
                <p className={styles.header}>Сортировка</p>
            </div>
            <div className={styles.sortWrapper}>
                <div className={styles.cercal} />
                <p className={styles.text}>Без сортировки</p>
            </div>
            <div className={styles.sortWrapper}>
                <div className={styles.cercal} />
                <p className={styles.text}>По алфавиту</p>
            </div>
            <div className={styles.sortWrapper}>
                <div className={styles.cercal} />
                <p className={styles.text}>По дню рождения</p>
            </div>
        </div>
    );
};
