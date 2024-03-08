import { useDispatch, useSelector } from 'react-redux';
import styles from './SortingBlok.module.scss';
import React, { useEffect } from 'react';
import { RootState } from '../../__data__/store/store';
import { ISort } from '../../__data__/models/coPeopleDataModels';
import { SortingItem } from '../SortingItem/SortingItem';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { uniqueKey } from '../../__data__/utils/utils';

export const SortingBlock: React.FC = () => {
    const { sorting, sortingName, queryData } = useSelector((state: RootState) => state.coPeopleData);

    const dispatch = useDispatch();

    const getActive = (depart: string) => {
        if (sortingName === depart) {
            return true;
        } else {
            return false;
        }
    };

    const getNoRepeatSorting = () => {
        if (sorting) {
            return sorting
                .reduce(
                    (prevItem: Array<any>, curItem) => [
                        ...prevItem,
                        prevItem.find((v) => v?.name === curItem.name) ? null : curItem,
                    ],
                    []
                )
                .filter((v) => v);
        }
    };

    const sortRender = () =>
        getNoRepeatSorting()?.map((item: ISort, sortIndex: number) => {
            return (
                <SortingItem
                    key={uniqueKey(item.name, sortIndex)}
                    position={item?.department}
                    index={sortIndex}
                    isActive={getActive(item?.department)}
                >
                    {item?.name}
                </SortingItem>
            );
        });

    useEffect(() => {
        dispatch(peopleDataSlice.actions.cleanSortingItem());
        dispatch(peopleDataSlice.actions.getSortingItem(queryData));
    }, [queryData]);

    useEffect(() => {
        getNoRepeatSorting();
    }, [sorting]);

    return (
        <div className={styles.borderWrapper}>
            <div db-name='test-sort-block' className={styles.wrapper}>
                {sortRender()}
            </div>
        </div>
    );
};
