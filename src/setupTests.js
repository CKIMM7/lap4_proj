// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';

import '@testing-library/jest-dom';
import fetchMock from "jest-fetch-mock";
import axios from 'axios';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import reducer from '../reducers/index'


import gamesActions from '../store/store'
import usersActions from '../store/usersSlice'
import roomsActions from '../store/roomSlice'

import gamesSlice from '../store/store';
import userSlice from '../store/usersSlice';
import roomSlice from '../store/roomSlice';

import store from '../store';

const TestProviders = () => {


    return ({ children }) => (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options = {}) => {

    console.log(ui)

    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

fetchMock.enableMocks()
jest.mock('axios')
//axios.get.mockResolvedValue({ data: [ { latlng: [123, 456] }]})

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;