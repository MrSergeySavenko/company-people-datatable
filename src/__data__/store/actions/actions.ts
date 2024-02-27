import { IData } from '../../models/coPeopleDataModels';
import { peopleDataSlice } from '../reducers';
import { AppDispatch, AppState } from '../store';
// import { delayFunc } from '../../utils/utils';

export const fetchData = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(peopleDataSlice.actions.dataFetch());

        const url = `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__dynamic=true`;

        const response = await fetch(url);
        const data: IData = await response.json();

        // await delayFunc(5000);

        if (response) {
            dispatch(peopleDataSlice.actions.dataFetchSuccess(data));
        }
    } catch (err: unknown) {
        dispatch(peopleDataSlice.actions.dataFetchFailure(err as string));
        console.error(err);
    }
};
