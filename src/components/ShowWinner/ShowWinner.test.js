/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react';

 import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
 import store from '../../store/index';
 import { BrowserRouter as Router } from 'react-router-dom';

 import ShowWinner from './index.jsx'

const MockShowWinner = () => {
   return (
      <Provider store={store}>
      <BrowserRouter>
         <ShowWinner />
      </BrowserRouter>
      </Provider>
   )
}

describe('ShowWinner', () => {
   const listOfPlayers = [
      { id: 1, name: 'a', score: 101 },
      { id: 2, name: 'b', score: 200 },
      { id: 3, name: 'c', score: 250 }
   ]

   beforeEach(() => {
      jest.resetAllMocks()
      render(<MockShowWinner/>)
  })

   test('display a player rank for the session', () => {
      const divElement = screen.findByTestId(`show-winner-item-0`)
      expect(divElement).toBeInTheDocument();

      // const btnElement = screen.getByText(/Beginner/i);
      // fireEvent.click(btnElement)
      // expect(btnElement.id).toBe('easy');
   })
})