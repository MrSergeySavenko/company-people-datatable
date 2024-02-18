import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { IItemsData } from '../../__data__/models/coPeopleDataModels';
import { PepleInfoItem } from '../PeopleInfoItem/PeopleInfoItem';
import styles from './PeopleInfoBlock.module.scss';

export const PepleInfoBlok: React.FC = () => {
    const { data, sortData } = useSelector((state: RootState) => state.coPeopleData);

    const peopleRender = () => {
        if (sortData?.length !== 0 && sortData !== null) {
            return sortData?.map((item: IItemsData) => {
                return (
                    <PepleInfoItem
                        url={item.avatarUrl}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        position={item.department}
                    />
                );
            });
        } else {
            return data?.items?.map((item: IItemsData) => {
                return (
                    <PepleInfoItem
                        url={item.avatarUrl}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        position={item.department}
                    />
                );
            });
        }
    };

    return <div className={styles.wrapper}>{peopleRender()}</div>;
};
