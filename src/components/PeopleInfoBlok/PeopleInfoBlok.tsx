import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { IItemsData } from '../../__data__/models/coPeopleDataModels';
import { PeopleInfoItem } from '../PeopleInfoItem/PeopleInfoItem';
import styles from './PeopleInfoBlock.module.scss';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { renderDataAfterSort, uniqueKey } from '../../__data__/utils/utils';
import { useNavigate } from 'react-router-dom';
import { findRightPerson, returnActualData } from './utils';

export const PepleInfoBlok: React.FC = () => {
    const { data, sortData, inputQuery, queryData, activeSorting } = useSelector(
        (state: RootState) => state.coPeopleData
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const newArr = findRightPerson(inputQuery, data);
        dispatch(peopleDataSlice.actions.getQueryData(newArr));
    }, [inputQuery]);

    const handleRouteMain = (item: IItemsData) => {
        dispatch(peopleDataSlice.actions.getDetailsItem(item));
        return navigate('/details');
    };

    const renderPeople = () => {
        return renderDataAfterSort(
            returnActualData(inputQuery, sortData, data, queryData),
            activeSorting
        )?.map((item: IItemsData, i: number) => {
            if (activeSorting === 'date' && i > 0) {
                if (
                    item.birthday.slice(0, 4) <
                    renderDataAfterSort(
                        returnActualData(inputQuery, sortData, data, queryData),
                        activeSorting
                    )[i - 1].birthday.slice(0, 4)
                ) {
                    return (
                        <PeopleInfoItem
                            key={uniqueKey(item.firstName, i)}
                            onClick={() => handleRouteMain(item)}
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
                    key={uniqueKey(item.firstName, i)}
                    onClick={() => handleRouteMain(item)}
                    url={item.avatarUrl}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    position={item.department}
                    userTag={item.userTag}
                    date={item.birthday}
                />
            );
        });
    };

    return (
        <div db-text='peple-info-block' className={styles.wrapper}>
            {renderPeople()}
        </div>
    );
};
