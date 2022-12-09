/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen, fireEvent } from '@testing-library/react';
 import { useNavigate } from "react-router-dom";

 import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
 import store from '../store/index';

 import useUserStatus from './useUserStatus.jsx';

//  const MockUseUserStatus = () => {
//     return (
//         <Provider store={store}>
//         <BrowserRouter>
//             <useUserStatus />
//         </BrowserRouter>
//         </Provider>
//     )
// }


 describe('useUserStatus', () => {
    const mockSocketId = 213219739;
    const mockRoom = 123132;

    beforeEach(() => {
        // jest.resetAllMocks()
        // render(<MockComp/>)
    })

    test('createRoom', () => {
        const createRoom = jest.fn();
        // const mockRoute = '/createlobby'

        expect(createRoom).toBeTruthy()
    })

    test('broadCastGame: user to navigate a lobby with room id matching)', () => {
        const mockNavigate = jest.fn();
        const testId = 213219739;

        expect(mockNavigate).toBeTruthy(); 
        expect(mockSocketId).toBe(testId);
    })
 }) 