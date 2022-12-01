import { configureStore, combineReducers } from '@reduxjs/toolkit';

import gamesSlice from './store';

const store = configureStore({
  reducer: { games:  gamesSlice.reducer }
});


export default store;
