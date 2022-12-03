import { configureStore, combineReducers } from '@reduxjs/toolkit';

import gamesSlice from './store';
import userSlice from './usersSlice';
import gamesStatsSlice from './gameStatsSlice';
import roomSlice from './roomSlice';

const store = configureStore({
  reducer: { 
              games:  gamesSlice.reducer,
              user: userSlice.reducer,
              gameStats: gamesStatsSlice.reducer,
              room: roomSlice.reducer
            }
});


export default store;
