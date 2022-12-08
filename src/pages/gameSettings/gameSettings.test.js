/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import GameSettings from './index.jsx';

const MockGameSettings = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GameSettings />
            </BrowserRouter>
        </Provider>
    )
}

describe('Game Settings', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockGameSettings />)
    })

    test('display game settings', () => {
        const divElement = screen.findByTestId(`game-settings`)
        expect(divElement).toBeTruthy();

    })
})