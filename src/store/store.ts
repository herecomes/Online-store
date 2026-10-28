import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../services/productsApi';
import querySliceReducer from './slices/queries';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    "queries": querySliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;