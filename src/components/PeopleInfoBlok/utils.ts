import { IData, IItemsData } from '../../__data__/models/coPeopleDataModels';

export const findRightPerson = (query: string, data: IData | null) => {
    const arr: Array<IItemsData> = [];
    let counter = 0;
    data?.items.forEach((item: IItemsData) => {
        counter = 1;
        Object.values(item).map((strItem: string) => {
            if (
                strItem !== ('true' || 'false') &&
                typeof strItem === 'string' &&
                strItem.length < 15 &&
                counter === 1
            ) {
                if (strItem?.indexOf(query) !== -1 || undefined) {
                    counter = 0;
                    arr.push(item);
                }
            }
        });
    });
    return arr;
};

export const returnActualData = (
    inputQuery: string,
    sortData: IItemsData[] | null,
    data: IData | null,
    queryData: IItemsData[]
) => {
    if (inputQuery.length > 0) {
        if (sortData?.length !== 0 && sortData !== null) {
            return sortData;
        }
        return queryData;
    }
    if (sortData?.length !== 0 && sortData !== null) {
        return sortData;
    }
    if (data) {
        return data.items;
    }
    return [];
};
