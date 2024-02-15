import { combineReducers } from '@reduxjs/toolkit';

import coPeopleData from './peopleData';
import { peopleDataSlice } from './peopleData';

const rootReducer = combineReducers({ coPeopleData });

export { rootReducer, peopleDataSlice };
