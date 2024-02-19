import { useDispatch, useSelector } from 'react-redux';
import styles from './SortingBlok.module.scss';
import React, { useEffect, useState } from 'react';
import { RootState } from '../../__data__/store/store';
import { ISort, ITranslateSort } from '../../__data__/models/coPeopleDataModels';
import { SortingItem } from '../SortingItem/SortingItem';
import { peopleDataSlice } from '../../__data__/store/reducers';

export const SortingBlock: React.FC = () => {
    const { sorting, data, sortingName } = useSelector((state: RootState) => state.coPeopleData);

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
        data
            ? getNoRepeatSorting()?.map((item: ISort, sortIndex: number) => {
                  return (
                      <SortingItem
                          position={item?.department}
                          index={sortIndex}
                          isActive={getActive(item?.department)}
                      >
                          {item?.name}
                      </SortingItem>
                  );
              })
            : [];

    useEffect(() => {
        dispatch(peopleDataSlice.actions.getSortingItem());
    }, [data]);

    useEffect(() => {
        getNoRepeatSorting();
    }, [sorting]);

    return <div className={styles.wrapper}>{sortRender()}</div>;
};
