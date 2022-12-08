import { render, screen } from '@testing-library/react';
import App from '../App';
import { usersActions } from './usersSlice'
import userSlice from './usersSlice'

describe('User Slice', () => {

    beforeEach(() => {
        // render(<roomSlice />)
        userSlice()
    })

    test('sets room data in state', () => {
        const testState = {
            user: '',
            difficulty: '',
            category: '',
            messageReceived: '',
            socket: {},
            searchValue: '',
            textInput: '',
            difficulty: '',
            category: '',
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

        expect(testState).toBe(roomActions.setRoom(testState, testAction).payload)
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

        expect(testState).toBe(roomActions.setMessage(testState, testAction).payload)
    })


})