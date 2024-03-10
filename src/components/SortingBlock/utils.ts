import { ISort } from '../../__data__/models/coPeopleDataModels';

export const getActive = (depart: string, sortingName: string) => {
    if (sortingName === depart) {
        return true;
    } else {
        return false;
    }
};

export const getNoRepeatSorting = (sorting: ISort[]) => {
    if (sorting) {
        return sorting
            .reduce(
                (prevItem: Array<any>, curItem) => [
                    ...prevItem,
                    prevItem.find((v) => v?.name === curItem.name) ? null : curItem,
                ],
                []
            )
            .filter((v) => v);
    }
};
