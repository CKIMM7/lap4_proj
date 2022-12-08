/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import Header from './index.jsx';

const MockHeader = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    )
}

describe('Timer', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockHeader />)
    })

    test('display welcome message', () => {
        const divElement = screen.findByTestId(`welcome-div`)
        expect(divElement).toBeTruthy();

    })
})