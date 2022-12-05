import { render, screen } from '@testing-library/react';
import App from '../App';
import { roomActions } from './roomSlice'


describe('Room Slice', () => {

  beforeEach(() => {
      // render(<roomSlice />)
  })

  test( 'sets room data in state' , () => {
    const testState = {
        room: [{
            id: 'Test Room',
            users: [],
            messages: [
              {
                user: '',
                message: ''
              }
            ]}],
        searchValue: '',
        textInput: '' 
    }
    const testAction = {payload: [{
        id: '',
        users: [],
        messages: [{
            user: 'Admin',
            message: 'Welcome to the chat room!'
          }]}]}
    
    expect(testState.room).toBe(roomActions.setRoom(testState, testAction).payload.room)
  })

  test('sets message', () => {
    const testState = {
      room: [{
        id: 'Test Room',
        users: [],
        messages: [
          {
            user: '',
            message: ''
          }
        ]
      }],
      searchValue: '',
      textInput: ''
    }
    const testAction = {
      payload: [{
        id: '',
        users: [],
        messages: [{
          user: 'Admin',
          message: 'Welcome to the chat room!'
        }]
      }]
    }

    expect(testState.room).toBe(roomActions.setMessage(testState, testAction).payload.room)
  })


})