import { createSlice } from '@reduxjs/toolkit';

const roomSlice = createSlice({
    name: 'room',
    initialState: {
        room: [],
        searchValue: '',
        textInput: '' 
    },
  reducers: {

      setRoom(state, action) {
        console.log('state.room')
        //console.log(state.room)
        console.log(action.payload)
        console.log(...state.room)
        state.room = action.payload
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

  
    },
});

export const roomActions = roomSlice.actions;

export default roomSlice;
