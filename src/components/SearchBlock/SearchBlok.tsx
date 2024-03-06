import React, { useRef, useState } from 'react';
import styles from './SearchBlok.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { RootState } from '../../__data__/store/store';

export const SerchBlock: React.FC = () => {
    const { window, inputQuery } = useSelector((state: RootState) => state.coPeopleData);

    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const inputRef = useRef(null);

    const findPeple = (e: any) => {
        setInput(e.target.value);
        dispatch(peopleDataSlice.actions.setQuery(e.target.value));
        console.log(inputQuery);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.serchImg} />
            <input
                db-test='input-test'
                className={styles.input}
                ref={inputRef}
                value={input}
                onChange={(e: any) => findPeple(e)}
                placeholder='Введите тег, имя, почту...'
            />
            <button
                db-test='modal-butt-test'
                className={styles.burgerMenu}
                onClick={() => {
                    dispatch(peopleDataSlice.actions.changeSortWindow());
                    console.log(window);
                }}
            />
        </div>
    );
};
