import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { IItemsData } from '../../__data__/models/coPeopleDataModels';
import { PepleInfoItem } from '../PoepleInfoItem/PepleInfoItem';
import styles from './PeapleInfoBlock.module.scss';

export const PepleInfoBlok: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.coPeapleData);

    const pepleRender = () => {
        return data?.items.map((item: IItemsData) => {
            return (
                <PepleInfoItem
                    url={item.avatarUrl}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    position={item.position}
                />
            );
        });
    };
    console.log(data);
    return <div className={styles.wrapper}>{pepleRender()}</div>;
};
