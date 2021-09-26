import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updatedFilters(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updatedFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
