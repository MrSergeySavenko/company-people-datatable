import styled from '@emotion/styled';

export const SWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '12px',
    alignItems: 'center',

    '&:last-child': {
        marginBottom: '0px',
    },
}));

interface SIImageProp {
    url?: string;
}

export const SImage = styled('div')(({ url }: SIImageProp) => ({
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    backgroundImage: "url('url')",
    marginRight: '16px',
}));

export const STextWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

interface SITextProp {
    underText: boolean;
}

export const SText = styled('p')(({ underText }: SITextProp) => ({
    color: underText ? 'rgb(85, 85, 92)' : 'rgb(5, 5, 16)',
    fontFamily: 'Inter',
    fontSize: underText ? '13px' : '16px',
    fontWeight: underText ? '400' : '500',
    lineHeight: underText ? '16px' : '20px',
    letterSpacing: '0px',
    marginBottom: underText ? '0px' : '3px',
}));
