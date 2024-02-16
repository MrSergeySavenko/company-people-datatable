import React, { useEffect } from 'react';
import styles from './Main.module.scss';
import { TextAria } from '../../components/TextArea/TextArea';
import { SerchBlock } from '../../components/SearchBlock/SearchBlok';
import { SortingBlock } from '../../components/SortingBlock/SortingBlok';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../__data__/store/actions/actions';
import { PepleInfoBlok } from '../../components/PeopleInfoBlok/PeopleInfoBlok';
import { RootState } from '../../__data__/store/store';

export const Main: React.FC = () => {
    const { sortWindow } = useSelector((state: RootState) => state.coPeopleData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData() as any);
    }, []);

    return (
        <div className={styles.wrapper}>
            <TextAria>Поиск</TextAria>
            <SerchBlock />
            <SortingBlock />
            <PepleInfoBlok />
        </div>
    );
};
