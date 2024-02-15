import { IData } from '../../models/coPeopleDataModels';
import { peopleDataSlice } from '../reducers';
import { AppDispatch } from '../store';

export const fetchData = (link: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(peopleDataSlice.actions.dataFetch());

        const url = `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${link}`;

        const response = await fetch(url);
        const data: IData = await response.json();

        if (response) {
            dispatch(peopleDataSlice.actions.dataFetchSuccess(data));
        }
    } catch (err: unknown) {
        dispatch(peopleDataSlice.actions.dataFetchFailure(err as string));
        console.error(err);
    }
};
