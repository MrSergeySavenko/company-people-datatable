import React, { useEffect } from 'react';
import { ReactDOM } from 'react';
import styles from './ModalWindow.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { ModalSortChanger } from '../ModalSortChanger/ModalSortChanger';
import { ITypeOfSort } from '../../__data__/models/coPeopleDataModels';
import { createPortal } from 'react-dom';

const getActiveType = (type: string, activeSorting: string) => (type === activeSorting ? true : false);

const portal = document.getElementById('portal');

export const ModalWindow: React.FC = () => {
    const { activeSorting, sortingArray, window } = useSelector((state: RootState) => state.coPeopleData);

    const dispatch = useDispatch();

    const hadleModalOpen = () => dispatch(peopleDataSlice.actions.changeSortWindow());

    const hadleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

    useEffect(() => {
        if (window) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [window]);

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

    return createPortal(
        <>
            {window ? (
                <div db-test='modal-window-test' className={styles.allWrapper} onClick={hadleModalOpen}>
                    <div className={styles.wrapper} onClick={hadleStopPropagation}>
                        <div className={styles.headerWrapper}>
                            <p className={styles.header}>Сортировка</p>
                            <button
                                db-test='clos-butt'
                                className={styles.closeButton}
                                onClick={hadleModalOpen}
                            />
                        </div>
                        <div db-test='all-sorting-wrapper' className={styles.allSortingWrapper}>
                            {renderTypeOfSorting()}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>,
        portal as HTMLElement
    );
};
