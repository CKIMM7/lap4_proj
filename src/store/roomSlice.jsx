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
    },
    
    setMessage(state, action) {

      let indexOfRoom = state.room.findIndex(room => room.id == action.payload.room)
      const tempRoom = state.room
      tempRoom[indexOfRoom].messages.push({ user: action.payload.user, message: action.payload.message })

      console.log(action.payload)
      state.room = tempRoom

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

  }

});

export const roomActions = roomSlice.actions;

export default roomSlice;
