/**
 * @jest-environment jsdom
 */


import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
// import axios from 'axios';
import mockAxiosResponse from '../../../__mocks__/axios'

import Difficulty from './index'

jest.mock('../../api/axios');

const mockDispatch = jest.fn();
let difficulty = jest.fn();

describe('Leaderboard', () => {
    let levelProp = 'easy';

    // const checkBtns = (btns) => {
    //     btns.forEach((btn) => {
    //         // expect the input value should change to task var
    //         // fireEvent.change(inputElement, { target: { value: task } });
    //         fireEvent.click(btnElement);
    //     })
    // }



    beforeEach(() => {
        jest.resetAllMocks()
        
        render(<Difficulty level={levelProp} />)
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
        await expect(btnElement.value).toBe(levelProp)
    })
})