import React from 'react';
import { SSortingWrapper } from './SortingItem.style';
import { useDispatch, useSelector } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';

interface IProp {
    children: string;
    position: string;
    isActive: boolean;
    index: number;
}

export const SortingItem: React.FC<IProp> = ({ children, position, index, isActive }) => {
    const dispatch = useDispatch();

    const getSort = () => {
        if (index === 0) {
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
