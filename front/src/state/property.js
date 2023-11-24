import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProperty = createAction("SET_PROPERTY");

const initialState = { id: null, name: null, email: null };

const reducerUser = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
});

export default reducerUser;
