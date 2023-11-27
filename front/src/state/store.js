import { configureStore } from "@reduxjs/toolkit";
import reducerUser from "./user";
import filterReducer from "./filter";

const store = configureStore({
  reducer: {
    user: reducerUser,
    filter: filterReducer,
  },
});

export default store;
