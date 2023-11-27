import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFilter = createAction("SET_FILTER");

const initialFilter = {
  minPrecio: "",
  maxPrecio: "",
  minBaños: "",
  minAmbientes: "",
};

const filterReducer = createReducer(initialFilter, {
  [setFilter]: (state, action) => ({ ...state, ...action.payload }),
});

export default filterReducer;
