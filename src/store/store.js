import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  initialState: 0,
  name: 'count',
  reducers: {
    incCount: (state, action) => {
      state += 1;
      return state;
    },
    decCount: (state) => {
      state -= 1;
      return state;
    },
    reset: (state) => {
      state = 0;
      return state;
    },
  },
});
export const todoList = createSlice({
  initialState: '',
  name: 'Todo',
  reducers: {
    onInput: (state, action) => {
      return action.payload;
    },
    onClear: (state, action) => {
      return action.payload;
    },
  },
});
export const setlist  = createSlice({
  initialState: [],
  name: 'list',
  reducers: {
    onstore: (state, action) => {
      return action.payload;
    },
    onDelete: (state, action) => {
      return action.payload;
    },
   
  },
});

export const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    Todo: todoList.reducer,
    list: setlist.reducer,
  },
});
