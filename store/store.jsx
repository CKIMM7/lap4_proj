import { createSlice } from '@reduxjs/toolkit';

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        users: [],
        artistImage: '',
        searchValue: '',
        textInput: '' ,
        searchArray: [],
        isLoading: false,
        isError: false,
        error: {}
    },
    reducers: {
      setUsers(state, action) {
        state.userRepos = action.payload;
      },
  
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
  
      setTextInput(state, action) {
        console.log(action.payload)
        state.textInput = action.payload
      },
    
      setSearchValue(state, action) {
        console.log(action.payload)
        state.searchValue = action.payload
      },
  
      setSearchArray(state, action) {
        //console.log(action.payload)
        state.searchArray = action.payload
      },
  
  
  
    },
});

export const gamesActions = gamesSlice.actions;

export default gamesSlice;
