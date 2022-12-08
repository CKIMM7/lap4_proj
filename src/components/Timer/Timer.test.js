/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react';

 import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
 import store from '../../store/index';
import Timer from './index.jsx';

const MockTimer = () => {
   return (
      <Provider store={store}>
      <BrowserRouter>
         <Timer />
      </BrowserRouter>
      </Provider>
   )
}

describe('Timer', () => {

   beforeEach(() => {
      jest.resetAllMocks()
      render(<MockTimer/>)
  })

   test('display a player rank for the session', () => {
      const divElement = screen.findByTestId(`timeDisplay`)
      expect(divElement).toBeTruthy();

   })
})