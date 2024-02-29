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
    console.log(dataSample);
    return dataSample;
};

export const getMonth = (month: number) => {
    const arrMonth = ['янв', 'фев', 'марта', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

    return arrMonth[month - 1];
};

export const delayFunc = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const uniqueKey = (name: any, i: number) => `${name}+${i}`;
