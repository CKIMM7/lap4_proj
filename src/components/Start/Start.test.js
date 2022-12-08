/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import Start from './index.jsx';

const MockStart = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Start />
            </BrowserRouter>
        </Provider>
    )
}

describe('Timer', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockStart />)
    })

    test('display welcome message', () => {
        const divElement = screen.findByTestId(`welcome-div`)
        expect(divElement).toBeTruthy();

    })
})