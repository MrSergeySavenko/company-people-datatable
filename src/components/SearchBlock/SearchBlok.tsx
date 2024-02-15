import React from 'react';
import styles from './SearchBlok.module.scss';

export const SerchBlock: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.serchImg} />
            <input className={styles.input} placeholder='Введите тег, имя, почту...' />
            <button className={styles.burgerMenu} />
        </div>
    );
};
