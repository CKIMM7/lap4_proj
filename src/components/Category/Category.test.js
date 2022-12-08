/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';

import Category from './index'

const MockCategory = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Category />
        </BrowserRouter>
        </Provider>
    )
}

describe('Category', () => {
    const mockOneCategory = {id: 23, subject: 'history', desc: 'history desc...' }
    beforeEach(() => {
        jest.resetAllMocks()
        
        render(<MockCategory/>)
    })

    test('all 3 categories are displayed', () => {
        // const btnElements = screen.getAllByRole('button');
        const elements = screen.getAllByRole('heading')
        expect(elements).toBeTruthy();
    }) 

    test('one topic has been clicked', () => {
        const btnElement = screen.getByRole('heading', { name: /History/i });
        fireEvent.click(btnElement)

        btnElement.id = mockOneCategory.subject;
        expect(btnElement.id).toBe('history')
    })

    test('updateInput sets the category selected successfully', () => {
        const btnElement = screen.getByRole('heading', { name: /History/i });
        fireEvent.click(btnElement)

        btnElement.value = mockOneCategory.id;
        expect(btnElement.value).toBe(23)
    })
})