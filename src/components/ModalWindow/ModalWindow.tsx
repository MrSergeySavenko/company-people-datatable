import React from 'react';
import styles from './ModalWindow.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { ModalSortChanger } from '../ModalSortChanger/ModalSortChanger';
import { ITypeOfSort } from '../../__data__/models/coPeopleDataModels';

const getActiveType = (type: string, activeSorting: string) => (type === activeSorting ? true : false);

export const ModalWindow: React.FC = () => {
    const { activeSorting, sortingArray } = useSelector((state: RootState) => state.coPeopleData);

    const dispatch = useDispatch();

    const hadleModalOpen = () => dispatch(peopleDataSlice.actions.changeSortWindow());

    const hadleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

    const renderTypeOfSorting = () =>
        sortingArray.map((typeItem: ITypeOfSort) => {
            return (
                <ModalSortChanger
                    type={typeItem.type}
                    activeType={getActiveType(typeItem.type, activeSorting)}
                >
                    {typeItem.text}
                </ModalSortChanger>
            );
        });

    return (
        <div db-test='modal-window-test' className={styles.allWrapper} onClick={hadleModalOpen}>
            <div className={styles.wrapper} onClick={hadleStopPropagation}>
                <div className={styles.headerWrapper}>
                    <p className={styles.header}>Сортировка</p>
                    <button db-test='clos-butt' className={styles.closeButton} onClick={hadleModalOpen} />
                </div>
                <div db-test='all-sorting-wrapper' className={styles.allSortingWrapper}>
                    {renderTypeOfSorting()}
                </div>
            </div>
        </div>
    );
};
