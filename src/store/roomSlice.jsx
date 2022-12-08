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
            message: '',
          }
        ],
        game:[]
      }
    ],
    count: 10,
    searchValue: '',
    textInput: '',
    currentGame: []
  },
  reducers: {

    removeQuestion(state, action) {


        console.log(action.payload)
        const findIndex = state.room.findIndex(obj => obj.id == action.payload)
        console.log(current(state.room[findIndex].users))

        console.log(current(state.room[findIndex].game.shift()))

    },

    setRoom(state, action) {
      state.room = action.payload
      // return state.room
    },
    
    setMessage(state, action) {

      console.log(action.payload)
      let indexOfRoom = state.room.findIndex(room => room.id == action.payload.room)
      const tempRoom = state.room
      console.log(indexOfRoom)
      tempRoom[indexOfRoom].messages.push({ user: action.payload.user, message: action.payload.message })

      console.log(action.payload)
      state.room = tempRoom
      // return state.room
    },
    setCountDown(state, action) {
      console.log(action.payload)
      state.count = action.payload.count;
      console.log(state.count)

    },

  }

});

export const roomActions = roomSlice.actions;

export default roomSlice;
