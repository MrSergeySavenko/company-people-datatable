import React from 'react';
import styles from './SearchBlok.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { RootState } from '../../__data__/store/store';

export const SerchBlock: React.FC = () => {
    const { window } = useSelector((state: RootState) => state.coPeopleData);
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={styles.serchImg} />
            <input className={styles.input} placeholder='Введите тег, имя, почту...' />
            <button
                className={styles.burgerMenu}
                onClick={() => {
                    dispatch(peopleDataSlice.actions.changeSortWindow());
                    console.log(window);
                }}
            />
        </div>
    );
};
