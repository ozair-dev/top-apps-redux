import { createStore } from 'redux';
import rootReducer from './reducer';

function localState() {
  try {
    const apps = localStorage.getItem('apps');
    if (apps === null) return undefined;
    return { apps: JSON.parse(apps), filters: {} };
  } catch (err) {
    return undefined;
  }
}

function saveState(obj) {
  try {
    const apps = JSON.stringify(obj.apps);
    localStorage.setItem('apps', apps);
  } catch (err) {
    //  ignore
  }
}

const store = createStore(rootReducer, localState());
store.subscribe(() => saveState(store.getState()));

export default store;
