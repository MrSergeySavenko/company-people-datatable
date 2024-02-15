import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { IData, IDataState } from '../../models/coPeopleDataModels';

const initialState: IDataState = {
    data: null,
    isLoading: false,
    isError: false,
    error: '',
    sorting: [
        { name: 'Все', position: 'all' },
        { name: 'Designers', position: 'designer' },
        { name: 'Analysts', position: 'analytics' },
        { name: 'Managers', position: 'management' },
        { name: 'iOS', position: 'ios' },
        { name: 'Android', position: 'android' },
    ],
    activeId: 0,
};

export const paopleDataSlice = createSlice({
    name: 'coPeapleData',
    initialState: initialState,
    reducers: {
        dataFetch(state: Draft<IDataState>) {
            return { ...state, isLoading: true };
        },
        dataFetchFailure(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, isLoading: false, isError: true, error: action.payload };
        },
        dataFetchSuccess(state: Draft<IDataState>, action: PayloadAction<IData>) {
            return { ...state, isLoading: false, data: action.payload };
        },
        getActiveId(state, action: PayloadAction<number>) {
            return { ...state, activeId: action.payload };
        },
    },
});

export default paopleDataSlice.reducer;
