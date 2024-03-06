import React from 'react';
import styles from './NotReceivedData.module.scss';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../../__data__/store/actions/actions';

export const NotReceivedData: React.FC = () => {
    const dispatch = useDispatch();

    const handleReceivedData = () => {
        dispatch(fetchData() as any);
    };

    return (
        <div db-test='error-window-test' className={styles.wrapper}>
            <div className={styles.img} />
            <p className={styles.text}>Какой-то сверхразум все сломал</p>
            <p className={styles.underText}>Постараемся быстро починить</p>
            <p className={styles.replaceButt} onClick={handleReceivedData}>
                Попробовать снова
            </p>
        </div>
    );
};
