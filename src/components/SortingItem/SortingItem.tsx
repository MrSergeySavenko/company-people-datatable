import React, { useEffect } from 'react';
import { SSortingWrapper } from './SortingItem.style';
import { useDispatch, useSelector } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { RootState } from '../../__data__/store/store';
import { renderDataAfterSort } from '../../__data__/utils/utils';

interface IProp {
    children: string;
    position: string;
    isActive: boolean;
    index: number;
}

export const SortingItem: React.FC<IProp> = ({ children, position, index, isActive }) => {
    const { data, queryData, inputQuery, activeSorting } = useSelector(
        (state: RootState) => state.coPeopleData
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            dispatch(peopleDataSlice.actions.getSortingItem(data.items));
            renderDataAfterSort(data.items, activeSorting);
        }
    }, [data]);

    const handleGetSort = () => {
        if (inputQuery.length > 0) {
            if (index === 0) {
                dispatch(peopleDataSlice.actions.getSortData({ sortName: '', sortArray: queryData }));
            }
            dispatch(peopleDataSlice.actions.getSortData({ sortName: position, sortArray: queryData }));
        }
        if (data) {
            if (index === 0) {
                dispatch(peopleDataSlice.actions.getSortData({ sortName: '', sortArray: data.items }));
            }
            dispatch(peopleDataSlice.actions.getSortData({ sortName: position, sortArray: data.items }));
        }
    };

    return (
        <SSortingWrapper isActive={isActive} onClick={handleGetSort}>
            {children}
        </SSortingWrapper>
    );
};
