import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './slices/bookSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { booksApi } from './services/bookApi';

export const store = configureStore({
  reducer: {
    books: bookSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(booksApi.middleware),
  ],
});

setupListeners(store.dispatch)

export default store