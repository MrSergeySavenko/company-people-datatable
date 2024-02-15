import React, { useEffect } from 'react';
import styles from './Main.module.scss';
import { TextAria } from '../../components/TextArea/TextArea';
import { SerchBlock } from '../../components/SerchBlock/SerchBlok';
import { SortingBlock } from '../../components/SortingBlock/SortingBlok';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../__data__/store/actions/actions';
import { PepleInfoBlok } from '../../components/PoapleInfoBlok/PepleInfoBlok';

export const Main: React.FC = () => {
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
