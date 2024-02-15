import styled from '@emotion/styled';

interface SIProps {
    isActive: boolean;
}

export const SSortingWrapper = styled('div')(({ isActive }: SIProps) => ({
    padding: '8px 12px',
    color: isActive ? 'rgb(5, 5, 16)' : 'rgb(151, 151, 155)',
    fontFamily: 'Inter',
    fontSize: '15px',
    fontWeight: '600',
    lineHeight: '20px',
    textAlign: 'center',
    borderBottom: isActive ? '2px solid rgb(101, 52, 255)' : 'none',
    cursor: 'pointer',
}));
