import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { IData, IDataState, IItemsData } from '../../models/coPeopleDataModels';

const initialState: IDataState = {
    data: null,
    isLoading: false,
    isError: false,
    error: '',
    sorting: [{ name: 'Все', department: 'all' }],
    transSort: [
        { name: 'android', reName: 'Android' },
        { name: 'ios', reName: 'iOS' },
        { name: 'design', reName: 'Дизайн' },
        { name: 'management', reName: 'Менеджмент' },
        { name: 'qa', reName: 'QA' },
        { name: 'back_office', reName: 'Бэк-офис' },
        { name: 'frontend', reName: 'Frontend' },
        { name: 'hr', reName: 'HR' },
        { name: 'pr', reName: 'PR' },
        { name: 'backend', reName: 'Backend' },
        { name: 'support', reName: 'Техподдержка' },
        { name: 'analytics', reName: 'Аналитика' },
    ],
    window: false,
    sortingName: 'all',
    sortData: null,
    activeSorting: '',
    sortingArray: [
        { type: '', text: 'Без сортировки' },
        { type: 'name', text: 'По алфавиту' },
        { type: 'date', text: 'По дню рождения' },
    ],
    inputQuery: '',
};

export const peopleDataSlice = createSlice({
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
        dataSerch(state, action: PayloadAction<IData>) {
            return { ...state, data: action.payload };
        },
        getActiveId(state, action: PayloadAction<number>) {
            return { ...state, activeId: action.payload };
        },
        getSortData(state, action: PayloadAction<string>) {
            return {
                ...state,
                sortingName: action.payload,
                sortData: state.data
                    ? state.data?.items.filter((item) => {
                          return item.department === action.payload;
                      })
                    : null,
            };
        },
        getSortingItem(state) {
            return {
                ...state,
                sorting: state.sorting.concat(
                    state.data
                        ? state.data.items?.map((item) => {
                              return {
                                  name:
                                      state.transSort.find((objName) => objName.name === item.department)
                                          ?.reName || item.department,
                                  department: item.department,
                              };
                          })
                        : []
                ),
            };
        },
        changeSortWindow(state: Draft<IDataState>) {
            return { ...state, window: !state.window };
        },
        changeData(state, action: PayloadAction<string>) {
            return { ...state, activeSorting: action.payload };
        },
        setQuery(state, action: PayloadAction<string>) {
            return { ...state, inputQuery: action.payload };
        },
    },
});

export default peopleDataSlice.reducer;
