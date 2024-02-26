import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { IItemsData } from '../../__data__/models/coPeopleDataModels';
import { PeopleInfoItem } from '../PeopleInfoItem/PeopleInfoItem';
import styles from './PeopleInfoBlock.module.scss';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { renderDataAfterSort } from '../../__data__/utils/utils';

export const PepleInfoBlok: React.FC = () => {
    const { data, sortData, inputQuery, queryData, activeSorting } = useSelector(
        (state: RootState) => state.coPeopleData
    );

    const dispatch = useDispatch();

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
        dispatch(peopleDataSlice.actions.getQueryData(arr));
        return arr.items;
    };

    useEffect(() => {
        findInObj(inputQuery);
    }, [inputQuery]);

    const returnActualData = () => {
        if (inputQuery.length > 0) {
            if (sortData?.length !== 0 && sortData !== null) {
                return sortData;
            }
            return queryData;
        }
        if (sortData?.length !== 0 && sortData !== null) {
            return sortData;
        }
        if (data) {
            return data.items;
        }
        return [];
    };

    const peopleRender = () =>
        renderDataAfterSort(returnActualData(), activeSorting)?.map((item: IItemsData, i: number) => {
            if (activeSorting === 'date' && i > 0) {
                if (
                    item.birthday.slice(0, 4) <
                    renderDataAfterSort(returnActualData(), activeSorting)[i - 1].birthday.slice(0, 4)
                ) {
                    return (
                        <PeopleInfoItem
                            url={item.avatarUrl}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            position={item.department}
                            userTag={item.userTag}
                            date={item.birthday}
                            activeDateLine={true}
                        />
                    );
                }
            }

            return (
                <PeopleInfoItem
                    url={item.avatarUrl}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    position={item.department}
                    userTag={item.userTag}
                    date={item.birthday}
                />
            );
        });

    return <div className={styles.wrapper}>{peopleRender()}</div>;
};
