/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import CreateLobby from './index.jsx';

const MockCreateLobby = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CreateLobby />
            </BrowserRouter>
        </Provider>
    )
}

describe('Timer', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockCreateLobby />)
    })

    test('display welcome message', () => {
        const divElement = screen.findByTestId(`dashboard`)
        expect(divElement).toBeTruthy();

    })
})