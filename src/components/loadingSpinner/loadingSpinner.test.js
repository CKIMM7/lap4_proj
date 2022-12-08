/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import LoadingSpinner from './index.jsx';

const MockLoadingSpinner = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <LoadingSpinner />
            </BrowserRouter>
        </Provider>
    )
}

describe('Timer', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockLoadingSpinner />)
    })

    test('display lobbies', () => {
        const divElement = screen.findByTestId(`loading`)
        expect(divElement).toBeTruthy();

    })
})