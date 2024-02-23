import { IData, IItemsData } from '../models/coPeopleDataModels';

type TProp = IItemsData[];

//Надо сделать еще функцию по отбору dataRender и добавить сортировку по фамилии и дате рождения

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
