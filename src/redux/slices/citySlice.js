import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    value: '',
    forecasts: [],
    current: {},
    isLoading: true,
  },
  reducers: {
    changeCity: (state, action) => {
      state.isLoading = false;
      state.value = action.payload.value;
      state.current = action.payload.current;
      state.forecasts = action.payload.forecasts;
    },
    startLoadingCities: (state /* action */) => {
      state.isLoading = true;
    },
    notFoundCity: (state) => {
      state.isLoading = false;
    }
  },
});

export const { changeCity, startLoadingCities, notFoundCity } = citySlice.actions;

export default citySlice.reducer;
