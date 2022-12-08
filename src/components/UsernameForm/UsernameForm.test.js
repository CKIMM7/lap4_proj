/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import UsernameForm from './index.jsx';

const MockUsernameForm = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <UsernameForm />
            </BrowserRouter>
        </Provider>
    )
}

describe('Username Form', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockUsernameForm />)
    })

    test('display form for user', () => {
        const form = screen.getByRole('form')
        expect(form).toBeTruthy()
    })

    test('display input field for user', () => {
        const input = screen.getByRole('input')
        expect(input).toBeTruthy()
    })
})