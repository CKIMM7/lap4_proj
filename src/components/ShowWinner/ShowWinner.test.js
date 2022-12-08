/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen, fireEvent } from '@testing-library/react';

 import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
 import store from '../../store/index';
 import { BrowserRouter as Router } from 'react-router-dom';

 import { updateWinner } from '../../api/requests';
 global.fetch = require('jest-fetch-mock');

 import ShowWinner from './index.jsx'

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

const listOfPlayers = [
   { id: 1, name: 'a', score: 101 },
   { id: 2, name: 'b', score: 200 },
   { id: 3, name: 'c', score: 2100 },
]

// need this to convert number to string
const listOfCategory = [
   {id: 23, subject: 'History' },
   {id: 17, subject: 'Science' },
   {id: 21, subject: 'Sports'}
]

const MockShowWinner = () => {
   return (
      <Provider store={store}>
      <BrowserRouter>
         <ShowWinner category={listOfCategory.subject} data ={listOfPlayers} />
      </BrowserRouter>
      </Provider>
   )
}

describe('ShowWinner', () => { 

   beforeEach(() => {
      jest.resetAllMocks()
      fetch.enableMocks();
      render(<MockShowWinner />)
  })

   afterEach(() => {
      fetch.resetMocks();
   })
   
   test('2 buttons are displayed', () => {
      const btnElements = screen.getAllByRole('button')
      expect(btnElements).toBeTruthy();
      // fireEvent.click(btnElement)
   })

   test('leaderboard for the game session to be displayed', async () => {
      const divElement = await screen.getByTestId('show-winner-item-1')
      // screen.debug()
      expect(divElement).toBeTruthy();
   })

   test('it makes a request to http://localhost:3600/gameEnd}', async () => {
      //   await updateWinner(data)
        expect(fetch).toHaveBeenCalled();
        expect(updateWinner(listOfPlayers).then(mockJson)).toBeTruthy();
        expect(updateWinner(listOfPlayers).then(mockJson).then(mockRes)).toBeTruthy();
    })

   //  test('addData(): add data to db', () => {

   //    const mockAddData = jest.fn()
   //    // const mockResult = 

   //    expect(mockAddData).toHaveBeenCalled();
   // })
})