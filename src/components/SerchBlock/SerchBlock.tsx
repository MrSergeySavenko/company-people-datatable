import React from 'react';
import styles from './SerchBlock.module.scss';
import { RootState } from '../../__data__/store/store';

export const SerchBlock: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.serchImg} />
            <input className={styles.input} placeholder='Введите тег, имя, почту...' />
            <div className={styles.burgerMenu} />
        </div>
    );
};
