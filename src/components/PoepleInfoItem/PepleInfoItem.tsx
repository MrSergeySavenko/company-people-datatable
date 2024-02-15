import React from 'react';
import { SImage, SText, STextWrapper, SWrapper } from './PepleInfoItem.style';

interface IProps {
    url: string;
    firstName: string;
    lastName: string;
    position: string;
}

export const PepleInfoItem: React.FC<IProps> = ({ url, firstName, lastName, position }) => {
    return (
        <SWrapper>
            <SImage url={url} />
            <STextWrapper>
                <SText underText={false}>{`${firstName}${lastName}`}</SText>
                <SText underText={true}>{position}</SText>
            </STextWrapper>
        </SWrapper>
    );
};
