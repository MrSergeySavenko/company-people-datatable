import React, { useEffect } from 'react';
import { SSortingWrapper } from './SortingItem.style';
import { useDispatch, useSelector } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { RootState } from '../../__data__/store/store';

interface IProp {
    children: string;
    position: string;
    isActive: boolean;
    index: number;
}

export const SortingItem: React.FC<IProp> = ({ children, position, index, isActive }) => {
    const { data, queryData, inputQuery } = useSelector((state: RootState) => state.coPeopleData);

    const dispatch = useDispatch();

    const getSort = () => {
        if (inputQuery.length > 0) {
            console.log('aboba', inputQuery);
            if (index === 0) {
                dispatch(peopleDataSlice.actions.getSortData({ sortName: '', sortArray: queryData }));
            }
            dispatch(peopleDataSlice.actions.getSortData({ sortName: position, sortArray: queryData }));
        }
        if (data) {
            if (index === 0) {
                dispatch(peopleDataSlice.actions.getSortData({ sortName: '', sortArray: data }));
            }
            dispatch(peopleDataSlice.actions.getSortData({ sortName: position, sortArray: data }));
        }
    };

    useEffect(() => {
        if (data) {
            dispatch(peopleDataSlice.actions.getSortingItem(data));
        }
    }, [data]);

    return (
        <SSortingWrapper isActive={isActive} onClick={getSort}>
            {children}
        </SSortingWrapper>
    );
};
