import { IData } from '../../models/coPeopleDataModels';
import { paopleDataSlice } from '../reducers';
import { AppDispatch } from '../store';

export const fetchData = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(paopleDataSlice.actions.dataFetch());

        const url =
            ' https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all';

        const response = await fetch(url);
        const data: IData = await response.json();

        if (response) {
            dispatch(paopleDataSlice.actions.dataFetchSuccess(data));
        }
    } catch (err: unknown) {
        dispatch(paopleDataSlice.actions.dataFetchFailure(err as string));
        console.error(err);
    }
};
