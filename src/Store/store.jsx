import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Reducer/UserReducer";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
