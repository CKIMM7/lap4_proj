import { configureStore, combineReducers } from '@reduxjs/toolkit';

import gamesSlice from './store';
import usersSlice from './usersSlice';

const store = configureStore({
  reducer: { 
              games:  gamesSlice.reducer,
              users: usersSlice.reducer 
            }
});


export default store;
