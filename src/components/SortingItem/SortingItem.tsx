import React, { useEffect, useState } from 'react';
import { SSortingWrapper } from './SortingItem.style';
import { useDispatch, useSelector } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { RootState } from '../../__data__/store/store';
import { fetchData } from '../../__data__/store/actions/actions';

interface IProp {
    children: string;
    position: string;
    isActive: boolean;
    id: number;
}

export const SortingItem: React.FC<IProp> = ({ children, position, id, isActive }) => {
    const dispatch = useDispatch();

    const getSort = () => {
        if (id === 0) {
            dispatch(peopleDataSlice.actions.getSortData(''));
        }
        dispatch(peopleDataSlice.actions.getSortData(position));
    };

    return (
        <SSortingWrapper isActive={isActive} onClick={getSort}>
            {children}
        </SSortingWrapper>
    );
};
