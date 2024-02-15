import React, { useEffect, useState } from 'react';
import { SSortingWrapper } from './SortingItem.style';
import { useDispatch, useSelector } from 'react-redux';
import { paopleDataSlice } from '../../__data__/store/reducers';
import { RootState } from '../../__data__/store/store';

interface IProp {
    children: string;
    linkPosition: string;
    id: number;
}

export const SortingItem: React.FC<IProp> = ({ children, linkPosition, id }) => {
    const [active, setActive] = useState(false);

    const { activeId } = useSelector((state: RootState) => state.coPeapleData);

    const dispatch = useDispatch();

    const activeChange = () => (activeId === id ? setActive(true) : setActive(false));

    useEffect(() => {
        activeChange();
    }, [activeId]);

    return (
        <SSortingWrapper isActive={active} onClick={() => dispatch(paopleDataSlice.actions.getActiveId(id))}>
            {children}
        </SSortingWrapper>
    );
};
