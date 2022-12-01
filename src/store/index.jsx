import { configureStore, combineReducers } from '@reduxjs/toolkit';

import gamesSlice from './store';
import usersSlice from './usersSlice';
import gamesStatsSlice from './gameStatsSlice';

const store = configureStore({
  reducer: { 
              games:  gamesSlice.reducer,
              users: usersSlice.reducer,
              gameStats: gamesStatsSlice.reducer  
            }
});


export default store;
