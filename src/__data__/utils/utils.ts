import { IItemsData } from '../models/coPeopleDataModels';

type TProp = IItemsData[];

export const renderDataAfterSort = (dataRender: TProp, activeSorting: string) => {
    const dataSample = dataRender;
    if (activeSorting === 'name') {
        return [...dataRender]?.sort((a: IItemsData, b: IItemsData) => (a.firstName > b.firstName ? 1 : -1));
    }
    if (activeSorting === 'date') {
        return [...dataRender]?.sort((a: IItemsData, b: IItemsData) => (a.birthday > b.birthday ? -1 : 1));
    }
    return dataSample;
};

export const delayFunc = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const uniqueKey = (name: any, i: number) => `${name}+${i}`;
