import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios'

export interface BooksState {
    value: object;
    subject: string;
    sort: string;
    status: 'idle' | 'loading' | 'failed';
  }
  
  const initialState: BooksState = {
    value: {"totalItems": -1, "items": []},
    subject: 'all',
    sort: 'relevance',
    status: 'idle',
  };
  
  export const getBooksAsync = createAsyncThunk(
    'books/fetchBooks',
    async (query: string) => {
      const response = await axios.get(query);
      console.log(response.data)
      console.log(typeof(response.data))
      return response.data;
    }
  );

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
    extraReducers: (builder) => {
        builder
          .addCase(getBooksAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getBooksAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = action.payload;
          })
          .addCase(getBooksAsync.rejected, (state) => {
            state.status = 'failed';
          });
      },
  });
  
  export const { setSubject, setSort } = booksSlice.actions;
  
  export const selectBooks= (state: RootState) => state.books;
  
  export default booksSlice.reducer;