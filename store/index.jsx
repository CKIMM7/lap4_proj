import { configureStore, combineReducers } from '@reduxjs/toolkit';

import gamesSlice from './store';

const store = configureStore({
  reducer: { cart:  gamesSlice.reducer }
});


export default store;
