import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import managerReducer from "./managerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    manager: managerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
