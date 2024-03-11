import React, { useRef, useState } from 'react';
import styles from './SearchBlock.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { RootState } from '../../__data__/store/store';

export const SerchBlock: React.FC = () => {
    const [input, setInput] = useState('');
    const [activeLoop, setActiveLoop] = useState(false);

    const inputRef = useRef<any>(null);

    const { activeSorting } = useSelector((state: RootState) => state.coPeopleData);

    const dispatch = useDispatch();

    const handleFindPeple = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        dispatch(peopleDataSlice.actions.setQuery(e.target.value));
    };

    const handleFocusOnInput = () => {
        inputRef.current.focus();
        activeLoop ? setActiveLoop(false) : setActiveLoop(true);
    };

    const handleModalOpen = () => dispatch(peopleDataSlice.actions.changeSortWindow());

    return (
        <div className={styles.wrapper}>
            <div className={activeLoop ? styles.activeSerch : styles.serchImg} onClick={handleFocusOnInput} />
            <input
                db-test='input-test'
                className={styles.input}
                ref={inputRef}
                value={input}
                onChange={handleFindPeple}
                placeholder='Введите тег, имя, почту...'
            />
            <button
                db-test='modal-butt-test'
                className={activeSorting ? styles.activeBurgerMenu : styles.burgerMenu}
                onClick={handleModalOpen}
            />
        </div>
    );
};
