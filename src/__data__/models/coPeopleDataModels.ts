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

export interface IData {
    items: Array<IItemsData>;
}

export interface ISort {
    name: string;
    position: string;
}

export interface IDataState {
    isLoading: boolean;
    isError: boolean;
    error: string;
    data: IData | null;
    sorting: Array<ISort>;
    activeId: number;
}
