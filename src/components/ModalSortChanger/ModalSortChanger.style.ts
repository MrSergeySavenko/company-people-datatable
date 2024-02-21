import styled from '@emotion/styled';

export const SSortWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '40px',

    '&:last-child': {
        marginBottom: '0',
    },
}));

interface SIProp {
    activeType: boolean;
}

export const SCercal = styled('div')(({ activeType }: SIProp) => ({
    width: '20px',
    height: '20px',
    border: activeType ? '6px solid rgb(101, 52, 255);' : '2px solid rgb(101, 52, 255)',
    borderRadius: '50%',
    marginRight: '14px',
}));

export const SText = styled('p')(() => ({
    color: 'rgb(5, 5, 16)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0px',
}));
