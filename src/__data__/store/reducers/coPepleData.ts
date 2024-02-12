import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { IData, IDataState } from '../../models/coPeopleDataModels';

const initialState: IDataState = {
    data: null,
    isLoading: false,
    isError: false,
    error: '',
};

export const paopleDataSlice = createSlice({
    name: 'coPeapleDataTable',
    initialState: initialState,
    reducers: {
        dataFetch(state: Draft<IDataState>) {
            return { ...state, isLoading: true };
        },
        dataFetchFailure(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, isLoading: false, isError: true, error: action.payload };
        },
        dataFetchSuccess(state: Draft<IDataState>, action: PayloadAction<Array<IData>>) {
            return { ...state, isLoading: false, data: action.payload };
        },
    },
});

export default paopleDataSlice.reducer;
