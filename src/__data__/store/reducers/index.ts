import { combineReducers } from '@reduxjs/toolkit';

import coPeapleData from './coPepleData';
import { paopleDataSlice } from './coPepleData';

const rootReducer = combineReducers({ coPeapleData });

export { rootReducer, paopleDataSlice };
