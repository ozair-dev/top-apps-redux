import { createSelector, createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const appsSlice = createSlice({
  name: 'apps',
  initialState,
  reducers: {
    appAdded: {
      reducer(state, action) {
        state.push({ ...action.payload });
      },
      prepare(obj) {
        return { payload: { ...obj, id: nanoid() } };
      },
    },
    usersUpdated(state, action) {
      const app = state.find((item) => item.id === action.payload.id);
      app.users = action.payload.users;
    },
    downloadsUpdated(state, action) {
      const app = state.find((item) => item.id === action.payload.id);
      app.downloads = action.payload.downloads;
    },
    toggledFavourite(state, action) {
      const app = state.find((item) => item.id === action.payload.id);
      app.favourite = !app.favourite;
    },
    deletedApp(state, action) {
      return state.filter((app) => app.id !== action.payload.id);
    },
  },
});

function expandNum(str) {
  const num = str.slice(0, str.length - 1);
  const alp = str[str.length - 1].toLowerCase();
  const alpVal = { m: 10 ** 6, b: 10 ** 9 };
  return +num * alpVal[alp];
}

const selectApps = (state) => state.apps;
const selectFilters = (state) => state.filters;

function filterApps(apps, filters) {
  return apps.filter((app) => {
    let condition = true;
    for (const i in filters) {
      if (filters[i]) {
        if (i === 'name' || i === 'catagory') condition = app[i].toLowerCase().includes(filters[i].toLowerCase());
        else if (i === 'downloadsMin') condition = expandNum(app.downloads) >= expandNum(filters[i]);
        else if (i === 'downloadsMax') condition = expandNum(app.downloads) <= expandNum(filters[i]);
        else if (i === 'usersMin') condition = expandNum(app.users) >= expandNum(filters[i]);
        else if (i === 'usersMax') condition = expandNum(app.users) <= expandNum(filters[i]);
        if (!condition) break;
      }
    }
    return condition;
  });
}

const appsSelector = createSelector(selectApps, selectFilters, (apps, filters) => {
  const newApps = filterApps(apps, filters);
  return newApps.map((app) => app.id);
});
const selectAppById = (apps, id) => apps.find((app) => app.id === id);

const selectCatagories = createSelector(selectApps, (apps) => {
  const catagories = apps.map((app) => app.catagory);
  return catagories.filter((cat, index) => catagories.indexOf(cat) === index);
});

export const { appAdded, downloadsUpdated, usersUpdated, toggledFavourite, deletedApp } = appsSlice.actions;

export { appsSelector, selectAppById, selectCatagories };

export default appsSlice.reducer;
