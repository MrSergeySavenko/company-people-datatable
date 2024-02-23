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

export const SCercalWrapper = styled('div')(() => ({
    position: 'relative',
    width: '20px',
    height: '20px',
    marginRight: '14px',
}));

export const SCercal = styled('div')(({ activeType }: SIProp) => ({
    width: '20px',
    height: '20px',
    border: '2px solid rgb(101, 52, 255)',
    backgroundColor: activeType ? 'rgb(101, 52, 255);' : '#fff',
    borderRadius: '50%',
}));

export const SHidenCercal = styled('div')(({ activeType }: SIProp) => ({
    display: activeType ? 'block' : 'none',
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: '#fff',
    top: '8px',
    left: '8px',
    borderRadius: '50%',
}));

export const SText = styled('p')(() => ({
    color: 'rgb(5, 5, 16)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0px',
}));
