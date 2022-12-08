import { createSlice, current } from '@reduxjs/toolkit';

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        users: [],
        searchValue: '',
        gamesData:[],
        currentGame: [],
        textInput: '' ,
        searchArray: [],
        isLoading: false,
        isError: false,
        error: {}
    },
    reducers: {

      getQuestions(state, action) {
        console.log(action.payload)
        console.log(current(state.gamesData)) 

        const findIndex = state.gamesData.findIndex(obj => {
          console.log(obj.id)
          //obj.id == action.payload
        })

        console.log(findIndex)
        //state.currentGame = 
      },

      removeQuestion(state, action) {

        console.log(current(state.gamesData))
        console.log('remove')
        state.gamesData.shift()
      },

      setGamesData(state, action) {
        state.gamesData = action.payload;
      },

      setUsers(state, action) {
        state.userRepos = action.payload;
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
