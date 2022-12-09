import { default as Room } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector, useDispatch, Provider } from 'react-redux';
import store from '../../store'


describe('Room Component', () => {
    let getResultMock;

    const testData = {
            id: 'Default',
            users: ['Test'],
            messages: [
                {
                    user: '',
                    message: ''
                }
            ]
        }
    

    beforeEach(() => {
        render(
            <Provider store={ store }>
                <Router>
                    <Room data={testData} />
                </Router>
            </Provider>
            
            
        );
    });

    test('join button exists', () => {
        const button = screen.getByRole('button');
        expect(button).toBeTruthy();
    })

})

