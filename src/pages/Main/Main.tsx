import React, { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import { TextAria } from '../../components/TextArea/TextArea';
import { SerchBlock } from '../../components/SearchBlock/SearchBlok';
import { SortingBlock } from '../../components/SortingBlock/SortingBlok';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../__data__/store/actions/actions';
import { PepleInfoBlok } from '../../components/PeopleInfoBlok/PeopleInfoBlok';
import { RootState } from '../../__data__/store/store';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ItemSkeleton } from '../../components/Skeleton/Skeleton';
import { Navigate, useNavigate } from 'react-router-dom';

export const Main: React.FC = () => {
    const { window, isLoading, data } = useSelector((state: RootState) => state.coPeopleData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const windowRender = () => {
        if (window) {
            return <ModalWindow />;
        }
    };

    useEffect(() => {
        if (!data) {
            return navigate('/main');
        }
    }, []);

    useEffect(() => {
        if (!data) {
            dispatch(fetchData() as any);
        }
    }, []);

    return (
        <SkeletonTheme baseColor='#f3f3f6' highlightColor='#fafafa'>
            <div className={styles.wrapper}>
                <TextAria>Поиск</TextAria>
                <SerchBlock />
                <SortingBlock />
                {isLoading ? (
                    Array(8)
                        .fill(0)
                        .map((_) => <ItemSkeleton />)
                ) : (
                    <PepleInfoBlok />
                )}
                {windowRender()}
            </div>
        </SkeletonTheme>
    );
};
