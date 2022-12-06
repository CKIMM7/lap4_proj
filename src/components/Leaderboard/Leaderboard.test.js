/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';
import Leaderboard from './index.jsx'

describe('Leaderboard', () => {
    const mockData = { id: 1, name: 'a', score: 2131};
    // beforeAll(() => {
    // })

    test('rank top 10 are displayed', () => {
        render(<Leaderboard/>)
        // screen.getByText
        const divElement = screen.getByText(/Leaderboard/i);
        expect(divElement).toBeInTheDocument()
    }) 
})
