import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';

export interface BooksState {
    value: string[];
    subject: string;
    sort: string;
    status: 'idle' | 'loading' | 'failed';
  }
  
  const initialState: BooksState = {
    value: [],
    subject: 'all',
    sort: 'relevance',
    status: 'idle',
  };
  
  export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      setSubject: (state, action: PayloadAction<string>) => {
        state.subject = action.payload;
      },
      setSort: (state, action: PayloadAction<string>) => {
        state.sort = action.payload;
      },
    },
  });
  
  export const { setSubject, setSort } = booksSlice.actions;
  
  export const selectBooks= (state: RootState) => state.books.sort;
  
  export default booksSlice.reducer;