import React, { useEffect, useState } from 'react';
import { SSortingWrapper } from './SortingItem.style';
import { useDispatch, useSelector } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';
import { RootState } from '../../__data__/store/store';
import { fetchData } from '../../__data__/store/actions/actions';

interface IProp {
    children: string;
    linkPosition: string;
    id: number;
}

export const SortingItem: React.FC<IProp> = ({ children, linkPosition, id }) => {
    const [active, setActive] = useState(false);

    const { activeId } = useSelector((state: RootState) => state.coPeopleData);

    const dispatch = useDispatch();

    const changrActive = () => (activeId === id ? setActive(true) : setActive(false));

    const getSortData = () => {
        dispatch(peopleDataSlice.actions.getActiveId(id));
        dispatch(fetchData(linkPosition) as any);
    };

    useEffect(() => {
        changrActive();
    }, [activeId]);

    return (
        <SSortingWrapper isActive={active} onClick={getSortData}>
            {children}
        </SSortingWrapper>
    );
};
