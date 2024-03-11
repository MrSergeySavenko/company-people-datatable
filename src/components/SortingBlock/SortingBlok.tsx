import { useDispatch, useSelector } from 'react-redux';
import styles from './SortingBlok.module.scss';
import React, { useEffect } from 'react';
import { RootState } from '../../__data__/store/store';
import { ISort } from '../../__data__/models/coPeopleDataModels';
import { SortingItem } from '../SortingItem/SortingItem';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { uniqueKey } from '../../__data__/utils/utils';
import { getActive, getNoRepeatSorting } from './utils';

export const SortingBlock: React.FC = () => {
    const { sorting, sortingName, queryData } = useSelector((state: RootState) => state.coPeopleData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(peopleDataSlice.actions.cleanSortingItem());
        dispatch(peopleDataSlice.actions.getSortingItem(queryData));
    }, [queryData]);

    useEffect(() => {
        getNoRepeatSorting(sorting);
    }, [sorting]);

    const sortRender = () =>
        getNoRepeatSorting(sorting)?.map((item: ISort, sortIndex: number) => {
            return (
                <SortingItem
                    key={uniqueKey(item.name, sortIndex)}
                    position={item?.department}
                    index={sortIndex}
                    isActive={getActive(item?.department, sortingName)}
                >
                    {item?.name}
                </SortingItem>
            );
        });

    return (
        <div className={styles.borderWrapper}>
            <div db-name='test-sort-block' className={styles.wrapper}>
                {sortRender()}
            </div>
        </div>
    );
};
