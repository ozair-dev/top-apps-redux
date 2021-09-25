import { combineReducers } from 'redux';
import { appsReducer } from './features/apps';
import { filtersReducer } from './features/filters';

const rootReducer = combineReducers({ apps: appsReducer, filters: filtersReducer });

export default rootReducer;
