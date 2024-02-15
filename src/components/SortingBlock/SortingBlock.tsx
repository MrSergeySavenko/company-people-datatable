import { useSelector } from 'react-redux';
import styles from './SortingBlock.module.scss';
import React from 'react';
import { RootState } from '../../__data__/store/store';
import { ISort } from '../../__data__/models/coPeopleDataModels';
import { SortingItem } from '../SortingItem/SortingItem';

export const SortingBlock: React.FC = () => {
    const { sorting } = useSelector((state: RootState) => state.coPeapleData);

    const sortRender = () =>
        sorting.map((item: ISort, id: number) => {
            return (
                <SortingItem linkPosition={item.position} id={id}>
                    {item.name}
                </SortingItem>
            );
        });

    return <div className={styles.wrapper}>{sortRender()}</div>;
};
