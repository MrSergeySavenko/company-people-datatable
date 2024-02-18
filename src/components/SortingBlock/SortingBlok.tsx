import { useDispatch, useSelector } from 'react-redux';
import styles from './SortingBlok.module.scss';
import React, { useEffect, useState } from 'react';
import { RootState } from '../../__data__/store/store';
import { ISort } from '../../__data__/models/coPeopleDataModels';
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

    const sortRender = () =>
        data
            ? sorting?.map((item: ISort, id: number) => {
                  return (
                      <SortingItem position={item?.department} id={id} isActive={getActive(item?.department)}>
                          {item?.name}
                      </SortingItem>
                  );
              })
            : [];

    useEffect(() => {
        dispatch(peopleDataSlice.actions.getSortingItem());
    }, [data]);

    return <div className={styles.wrapper}>{sortRender()}</div>;
};
