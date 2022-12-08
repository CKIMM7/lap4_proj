/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen, fireEvent } from '@testing-library/react';
 import { useNavigate } from "react-router-dom";

 import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
 import store from '../../store/index';

 import CreateName from './index.jsx';

 const MockCreateName = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <CreateName />
        </BrowserRouter>
        </Provider>
    )
}

const navigate = jest.fn()

describe('CreateName', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        render(<MockCreateName/>)
    })

    test('modalcontainer', async () => {
        const div = await screen.findByTestId(`modalcontainer`)
        expect(div).toBeInTheDocument();
    }) 

    test('create username not displayed intially', () => {
        const txt = screen.getByText(/Create a 4-letter username!/i)
        expect(txt).toBeFalsey();
    }) 

    test('your name label not displayed intially', () => {
        const label = screen.getByText(/Your name/i)
        expect(label).toBeFalsey();
    }) 

    test('2 buttons displayed and click to redirect', () => {
        const btn1 = screen.getByRole('button', { name: /Close/i })
        const btn2 = screen.getByRole('button', { name: /Go!/i })

        fireEvent.click(btn1)
        fireEvent.click(btn2)
        expect(btn1).toBeTruthy()
        expect(btn2).toBeTruthy()
    }) 

    test('goHandler', () => {
        const goHandler = jest.fn();
        // const mockRoute = '/lobby'

        expect(goHandler).toBeTruthy()
    })
}) 