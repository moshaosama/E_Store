import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "../api/ProductSlice";

export const Store = configureStore({
  reducer: {
    [ProductReducer.reducerPath]: ProductReducer.reducer,
  },
  middleware: (defaultMiddleware: any) =>
    defaultMiddleware().concat(ProductReducer.middleware),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
