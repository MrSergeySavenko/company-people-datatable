import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { IItemsData } from '../../__data__/models/coPeopleDataModels';
import { PepleInfoItem } from '../PeopleInfoItem/PeopleInfoItem';
import styles from './PeopleInfoBlock.module.scss';

export const PepleInfoBlok: React.FC = () => {
    const { data, sortData, inputQuery } = useSelector((state: RootState) => state.coPeopleData);

    const findInObj = (query: string) => {
        const arr: any = [];
        let counter = 0;
        data?.items.forEach((item: IItemsData) => {
            counter = 1;
            Object.values(item).map((strItem: string) => {
                if (
                    strItem !== ('true' || 'false') &&
                    typeof strItem === 'string' &&
                    strItem.length < 15 &&
                    counter === 1
                ) {
                    if (strItem?.indexOf(query) !== -1 || undefined) {
                        counter = 0;
                        arr.push(item);
                    }
                }
            });
        });
        console.log(arr);
        return arr;
    };

    useEffect(() => {
        findInObj(inputQuery);
    }, [inputQuery]);

    const peopleRender = () => {
        if (inputQuery.length > 0) {
            return findInObj(inputQuery)?.map((item: IItemsData) => {
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
