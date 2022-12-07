import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
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
        console.log(action.payload)
        // let indexOfRoom = state.room.findIndex(room => room.id == action.payload.room)
        // const tempRoom = state.room
        // console.log(indexOfRoom)
        // tempRoom[indexOfRoom].messages.push({ user: action.payload.user, message: action.payload.message })

        // console.log(action.payload)
        // state.room = tempRoom
        state.users = action.payload;
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
