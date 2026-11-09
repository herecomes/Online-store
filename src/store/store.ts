import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../services/productsApi';
import querySliceReducer from './slices/queries';
import cartSliceReducer from './slices/cartSlice';
import { cartsApi } from '../services/cartsApi';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [cartsApi.reducerPath]: cartsApi.reducer,
    "queries": querySliceReducer,
    "cartSlice": cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;