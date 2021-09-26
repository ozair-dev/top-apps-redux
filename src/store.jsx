import { configureStore } from '@reduxjs/toolkit';
import { appsReducer } from './features/apps';
import { filtersReducer } from './features/filters';

function saveState(obj) {
  try {
    const apps = JSON.stringify(obj.apps);
    localStorage.setItem('apps', apps);
  } catch (err) {
    //  ignore
  }
}
const store = configureStore({
  reducer: {
    apps: appsReducer,
    filters: filtersReducer,
  },
});
store.subscribe(() => saveState(store.getState()));

export default store;
