import { createSlice } from '@reduxjs/toolkit';

const gamesStatsSlice = createSlice({
    name: 'gameStats',
    initialState: {
        highestScore: 100,
        searchValue: '',
        textInput: '' 
    },
    reducers: {
      setIsLoading(state, action) {
        //console.log(action.payload)
        state.isLoading = action.payload
      },
  
      setIsError(state, action) {
        //console.log(action.payload)
        state.isError = action.payload
      },
  
      setError(state, action) {
        //console.log(action.payload)
        state.error = action.payload
      },

    },
});

export const gameStatsActions = gamesStatsSlice.actions;

export default gamesStatsSlice;
