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

    test("Pick a Category!", () => {
        // const btnElements = screen.getAllByRole('button');
        const element = screen.getByRole('heading', { name: /Pick a Category!/i })
        expect(element).toBeTruthy();
    }) 

    test("Test your wit with three categories to choose from.", () => {
        // const btnElements = screen.getAllByRole('button');
        const element = screen.getByRole('heading', { name: /Test your wit with three categories to choose from./i })
        expect(element).toBeTruthy();
    }) 

    test('all 3 categories are displayed', () => {
        // const btnElements = screen.getAllByRole('button');
        const elements = screen.getAllByRole('heading')
        expect(elements).toBeTruthy();
    }) 

    test('display categories', () => {
        const divElement = screen.findByTestId(`list-of-categories`)
        expect(divElement).toBeTruthy();
    })

    test('display heading for categories', () => {
        const divElement = screen.findByTestId(`choosecategory`)
        expect(divElement).toBeTruthy();
    })

    test('there should be 3 buttons', () => {
        const btns = screen.getAllByRole('button')
        expect(btn).toBeTruthy(); 
    })

    describe('history category', () => {
        test('the topic has been clicked', () => {
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

    describe('Science & Nature category', () => {
        test('the topic has been clicked', () => {
            const btnElement = screen.getByRole('heading', { name: /Science & Nature/i });
            fireEvent.click(btnElement)
    
            btnElement.id = mockOneCategory.subject;
            expect(btnElement.id).toBe('science')
        })
    
        test('updateInput sets the category selected successfully', () => {
            const btnElement = screen.getByRole('heading', { name: /Science & Nature/i });
            fireEvent.click(btnElement)
    
            btnElement.value = mockOneCategory.id;
            expect(btnElement.value).toBe(17)
        })
    }) 
    
    describe('sports category', () => {
        test('the topic has been clicked', () => {
            const btnElement = screen.getByRole('heading', { name: /Sports/i });
            fireEvent.click(btnElement)
    
            btnElement.id = mockOneCategory.subject;
            expect(btnElement.id).toBe('science')
        })
    
        test('updateInput sets the category selected successfully', () => {
            const btnElement = screen.getByRole('heading', { name: /Sports/i });
            fireEvent.click(btnElement)
    
            btnElement.value = mockOneCategory.id;
            expect(btnElement.value).toBe(21)
        })
    }) 


})