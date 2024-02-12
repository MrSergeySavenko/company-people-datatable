import { combineReducers } from '@reduxjs/toolkit';

import coPeapleDataTable from './coPepleData';
import { paopleDataSlice } from './coPepleData';

const rootReducer = combineReducers({ coPeapleDataTable });

export { rootReducer, paopleDataSlice };
