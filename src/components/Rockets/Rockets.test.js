/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import Rockets from './index.jsx';

const MockRockets = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Rockets />
            </BrowserRouter>
        </Provider>
    )
}

describe('Timer', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockRockets />)
    })

    test('display a player rank for the session', () => {
        const divElement = screen.findByTestId(`background`)
        expect(divElement).toBeTruthy();

    })
})