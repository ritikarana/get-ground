import { createSlice } from '@reduxjs/toolkit';
import { booksApi } from '../services/bookApi';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: []
  },
  reducers: {
    searchbook(state, action) {
      state.books = state.books.filter((book) => book.id === action.payload.id);
    },
    fetchbook(state) {
       return state.books
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      booksApi.endpoints.getBooks.matchFulfilled,
      (state, action) => {
        state.books = action.payload.books;
      }
    );
  },
});

const { reducer, actions } = booksSlice;

export const { searchbook, fetchbook } = actions;

export default reducer;
