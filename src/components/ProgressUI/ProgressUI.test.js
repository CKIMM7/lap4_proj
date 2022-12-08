/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import Progress from './index.jsx';

const MockProgressUI = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Progress />
            </BrowserRouter>
        </Provider>
    )
}

describe('Progress UI', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockProgressUI />)
    })

    test('display a progress bar', () => {
        const divElement = screen.findByTestId(`progresscontainer`)
        expect(divElement).toBeTruthy();

    })

    test('display a progress bar', () => {
        const divElement = screen.findByTestId(`progressbar`)
        expect(divElement).toBeTruthy();

    })
})