function filtersReducer(state = {}, action) {
  switch (action.type) {
    case 'filters/updatedFilters':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function updatedFilters(filters) {
  return { type: 'filters/updatedFilters', payload: filters };
}

export { filtersReducer, updatedFilters };
