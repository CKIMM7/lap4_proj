/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import LobbyCode from './index.jsx';

const MockLobbyCode = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <LobbyCode />
            </BrowserRouter>
        </Provider>
    )
}

describe('Timer', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockLobbyCode />)
    })

    test('display lobbies', () => {
        const divElement = screen.findByTestId(`lobbies`)
        expect(divElement).toBeTruthy();

    })

    test('display heading', () => {
        const heading = screen.findByRole(`heading`)
        expect(heading).toBeTruthy();

    })
})