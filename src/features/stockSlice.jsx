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
      state.error = false;
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
      state.error = false;
    },

    proCatBraSuccess: (state, { payload }) => {
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
      state.loading = false;
      state.error = false;
    },

    proPurBraFirSuccess: (state, { payload }) => {
      state.products = payload[0];
      state.purchases = payload[1];
      state.brands = payload[2];
      state.firms = payload[3];
      state.loading = false;
      state.error = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  stocksSuccess,
  fetchFail,
  proCatBraSuccess,
  proPurBraFirSuccess,
} = stockSlice.actions;

export default stockSlice.reducer;
