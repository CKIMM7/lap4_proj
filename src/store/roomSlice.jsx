import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit'

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    room: [
      {
        id: 'Default',
        users: [],
        messages: [
          {
            user: '',
            message: ''
          }
        ]
      }
    ],
    searchValue: '',
    textInput: ''
  },
  reducers: {

    setRoom(state, action) {
      state.room = action.payload
      // return state.room
    },
    
    setMessage(state, action) {

      let indexOfRoom = state.room.findIndex(room => room.id == action.payload.room)
      const tempRoom = state.room
      tempRoom[indexOfRoom].messages.push({ user: action.payload.user, message: action.payload.message })

      console.log(action.payload)
      state.room = tempRoom
      // return state.room
    },

  }

});

export const roomActions = roomSlice.actions;

export default roomSlice;
