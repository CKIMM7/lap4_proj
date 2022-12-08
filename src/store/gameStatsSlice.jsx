import { createSlice } from '@reduxjs/toolkit';

const gamesStatsSlice = createSlice({
    name: 'gameStats',
    initialState: {
        highestScore: 100,
        searchValue: '',
        textInput: '' 
    },
    reducers: {
    },
});

export const gameStatsActions = gamesStatsSlice.actions;

export default gamesStatsSlice;
