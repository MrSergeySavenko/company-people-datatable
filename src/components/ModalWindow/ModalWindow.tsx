import React, { useState } from 'react';
import styles from './ModalWindow.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { ModalSortChanger } from '../ModalSortChanger/ModalSortChanger';
import { ITypeOfSort } from '../../__data__/models/coPeopleDataModels';

export const ModalWindow: React.FC = () => {
    const { window, activeSorting, sortingArray } = useSelector((state: RootState) => state.coPeopleData);

    const getActiveType = (type: string) => (type === activeSorting ? true : false);

    const renderTypeOfSorting = () =>
        sortingArray.map((typeItem: ITypeOfSort) => {
            return (
                <ModalSortChanger type={typeItem.type} activeType={getActiveType(typeItem.type)}>
                    {typeItem.text}
                </ModalSortChanger>
            );
        });

    const dispatch = useDispatch();

    return (
        <div
            className={styles.allWrapper}
            onClick={() => dispatch(peopleDataSlice.actions.changeSortWindow())}
        >
            <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                <div className={styles.headerWrapper}>
                    <p className={styles.header}>Сортировка</p>
                    <button
                        className={styles.closeButton}
                        onClick={() => dispatch(peopleDataSlice.actions.changeSortWindow())}
                    />
                </div>
                <div className={styles.allSortingWrapper}>{renderTypeOfSorting()}</div>
            </div>
        </div>
    );
};
