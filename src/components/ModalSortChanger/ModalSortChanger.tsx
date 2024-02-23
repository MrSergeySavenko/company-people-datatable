import React from 'react';
import { SCercal, SCercalWrapper, SHidenCercal, SSortWrapper, SText } from './ModalSortChanger.style';
import { useDispatch } from 'react-redux';
import { peopleDataSlice } from '../../__data__/store/reducers';

interface IProps {
    children: string;
    activeType: boolean;
    type: string;
}

export const ModalSortChanger: React.FC<IProps> = ({ children, activeType, type }) => {
    const dispatch = useDispatch();

    const activateSorting = () => {
        if (!activeType) {
            console.log(type);
            return dispatch(peopleDataSlice.actions.changeData(type));
        }
    };

    return (
        <SSortWrapper onClick={activateSorting}>
            <SCercalWrapper>
                <SCercal activeType={activeType} />
                <SHidenCercal activeType={activeType} />
            </SCercalWrapper>
            <SText>{children}</SText>
        </SSortWrapper>
    );
};
