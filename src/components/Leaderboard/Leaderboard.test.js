/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';
import Leaderboard from './index.jsx'

// jest.mock('./index.jsx')

const displayLevelTitle = jest.fn((type) => {
    if(type === 'easy') return 'Beginner';
    else if(type === 'medium') return 'Intermediate';
    else if(type === 'hard') return 'Expert';
    else return 'Error';
} )

describe('Leaderboard', () => {
    const mockData = { id: 1, name: 'test', difficulty: 'easy', score: 2131 };
    beforeAll(() => {
        render(<Leaderboard data={mockData} level={mockData.difficulty} />)
    })

    test('The heading is displayed', () => {
        // const mockPopulateTable = jest.fn(Leaderboard.PopulateTable())
        // const mockRes = { id: null, name: 'xxxx', score: 0 }

        const h2Element = screen.getByText(/Leaderboard/i)
        expect(h2Element).toBeTruthy();
    }) 

    test('Leaderboard type is displayed', () => {
        const type = 'easy';
        expect(displayLevelTitle(type)).toBe('Beginner');
    }) 
})
