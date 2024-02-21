import React, { useEffect, useRef, useState } from 'react';
import styles from './SearchBlok.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { RootState } from '../../__data__/store/store';

export const SerchBlock: React.FC = () => {
    const { window, inputQuery } = useSelector((state: RootState) => state.coPeopleData);

    const [input, setInput] = useState('');
    const [activeInput, setActiveInput] = useState(false);

    const dispatch = useDispatch();

    const inputRef = useRef(null);

    const findPeple = (e: any) => {
        setInput(e.target.value);
        dispatch(peopleDataSlice.actions.setQuery(e.target.value));
        console.log(inputQuery);
    };

    // useEffect(() => {
    //     const onClick = (e) => {if (inputRef !== null){inputRef.current.contains(e.target)}  || console.log('клик вне компонента')};
    //     document.addEventListener('click', onClick);
    //     return () => document.removeEventListener('click', onClick);
    //   }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.serchImg} />
            <input
                className={styles.input}
                ref={inputRef}
                value={input}
                onChange={(e: any) => findPeple(e)}
                placeholder='Введите тег, имя, почту...'
            />
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
