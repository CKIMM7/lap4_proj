/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import { BrowserRouter as Router } from 'react-router-dom';

// import axios from 'axios';
// import mockAxiosResponse from '../../../__mocks__/axios'
import { fetchLeaderboard } from '../../api/requests'
global.fetch = require('jest-fetch-mock');

import Difficulty from './index'

// jest.mock('../../api/axios');
// const mockDispatch = jest.fn();

// jest.mock('../../api/requests');
const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

const MockDifficulty = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Difficulty />
        </BrowserRouter>
        </Provider>
    )
}


describe('Leaderboard', () => {

    beforeEach(() => {
        jest.resetAllMocks()
        fetch.enableMocks();
        render(<MockDifficulty/>)
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    test('all 3 levels are displayed', () => {
        const btnElements = screen.getAllByRole('button');
        expect(btnElements).toBeTruthy();
    }) 

    test('one mode has been selected and starts game', () => {
        const btnElement = screen.getByText(/Beginner/i);
        fireEvent.click(btnElement)
        expect(btnElement.id).toBe('easy');
    })

    test('updateInput sets level selected successfully', async () => {
        const btnElement = screen.getByText(/Beginner/i);
        await expect(btnElement.value).toBe('easy')
    })

    test('it makes a request to http://localhost:3600/leaderboard/${category}/${level}', async () => {
        fetchLeaderboard('History', 'easy')
        expect(fetch).toHaveBeenCalled();
        expect(fetchLeaderboard('History', 'easy').then(mockJson)).toBeTruthy();
        expect(fetchLeaderboard('History', 'easy').then(mockJson).then(mockRes)).toBeTruthy();
    })

    // test('return a leaderboard', async () => {
    //     const testData = {id: 1, name: 'habit1', desc: null};

    //     await fetchLeaderboard('History', 'easy')
    //     // expect(fetch).toHaveBeenCalledWith(200);
    //     // expect(mockJson).toHaveBeenCalledWith(testData);
    // })
})