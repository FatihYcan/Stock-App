import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: [],
  sales: [],
  firms: [],
  brands: [],
  products: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },

    // firmsSuccess: (state, { payload }) => {
    //   state.firms = payload;
    //   state.loading = false;
    // },

    // salesSuccess: (state, { payload }) => {
    //   state.sales = payload;
    //   state.loading = false;
    // },

    stocksSuccess: (state, { payload }) => {
      state[payload.url] = payload.apiData;
      state.loading = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, stocksSuccess, fetchFail } = stockSlice.actions;

export default stockSlice.reducer;
