export interface IData {
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

export interface IDataState {
    isLoading: boolean;
    isError: boolean;
    error: string;
    data: Array<IData> | null;
}
