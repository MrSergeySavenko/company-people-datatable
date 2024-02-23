export interface IItemsData {
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    userTag: string;
    department: string;
    position: string;
    birthday: string;
    phone: string;
}

export interface IGetSortData {
    sortName: string;
    sortArray: Array<IItemsData>;
}

export interface IData {
    items: Array<IItemsData>;
}

export interface ISort {
    name: string;
    department: string;
}

export interface ITranslateSort {
    name: string;
    reName: string;
}

export interface ITypeOfSort {
    type: string;
    text: string;
}

export interface IDataState {
    isLoading: boolean;
    isError: boolean;
    error: string;
    data: IData | null;
    sorting: Array<ISort>;
    transSort: Array<ITranslateSort>;
    window: boolean;
    sortingName: string;
    sortData: Array<IItemsData> | null;
    activeSorting: string;
    sortingArray: Array<ITypeOfSort>;
    inputQuery: string;
    queryData: IItemsData[];
}
