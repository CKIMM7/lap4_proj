import { createSlice, current } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        difficulty: '',
        category: '',
        messageReceived: '',
        socket: {},
        searchValue: '',
        textInput: '',
        difficulty: '',
        category: '',
    },
  reducers: {

    setCategory(state, action) {
      state.category = action.payload;
    },
      
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },

    setSocket(state, action) {
      state.socket = action.payload;
    },

    setUser(state, action) {
      console.log('Set User')
      console.log(action.payload)
      // let arr = state.users
      // console.log(arr)

      // arr.push(action.payload)
      // console.log(arr)

      state.users = action.payload
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

export const usersActions = userSlice.actions;

export default userSlice;
