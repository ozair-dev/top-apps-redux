import { createSelector } from 'reselect';

function appsReducer(state = [], action) {
  switch (action.type) {
    case 'apps/appAdded':
      const newAppId = new Date().getTime();
      return [...state, { ...action.payload, id: newAppId }];
    case 'apps/usersUpdated':
      return state.map((app) => {
        if (app.id === action.payload.id) {
          return { ...app, users: action.payload.users };
        }
        return app;
      });
    case 'apps/downloadsUpdated':
      return state.map((app) => {
        if (app.id === action.payload.id) {
          return { ...app, downloads: action.payload.downloads };
        }
        return app;
      });
    case 'apps/toggledFavourite':
      return state.map((app) => {
        if (app.id === action.payload.id) {
          return { ...app, favourite: !app.favourite };
        }
        return app;
      });
    case 'apps/deletedApp':
      return state.filter((app) => app.id !== action.payload.id);
    default:
      return state;
  }
}

function expandNum(str) {
  const num = str.slice(0, str.length - 1);
  const alp = str[str.length - 1].toLowerCase();
  const alpVal = { m: 10 ** 6, b: 10 ** 9 };
  return +num * alpVal[alp];
}

function appAdded(app) {
  return { type: 'apps/appAdded', payload: app };
}

function usersUpdated(id, users) {
  return { type: 'apps/usersUpdated', payload: { id, users } }
}

function downloadsUpdated(id, downloads) {
  return { type: 'apps/downloadsUpdated', payload: { id, downloads } };
}

function toggledFavourite(id) {
  return { type: 'apps/toggledFavourite', payload: { id } };
}

function deletedApp(id) {
  return { type: 'apps/deletedApp', payload: { id } };
}

const selectApps = (state) => state.apps;
const selectFilters = (state) => state.filters;

function filterApps(apps, filters) {
  return apps.filter((app) => {
    let condition = true;
    for (const i in filters) {
      if (filters[i]) {
        if (i === 'name' || i === 'catagory') condition = app[i].toLowerCase().includes(filters[i].toLowerCase());
        if (i === 'downloadsMin') condition = expandNum(app.downloads) >= expandNum(filters[i]);
        if (i === 'downloadsMax') condition = expandNum(app.downloads) <= expandNum(filters[i]);
        if (i === 'usersMin') condition = expandNum(app.users) >= expandNum(filters[i]);
        if (i === 'usersMax') condition = expandNum(app.users) <= expandNum(filters[i]);
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

export {
  appsReducer,
  appAdded,
  downloadsUpdated,
  usersUpdated,
  toggledFavourite,
  deletedApp,
  appsSelector,
  selectAppById,
  selectCatagories,
};
