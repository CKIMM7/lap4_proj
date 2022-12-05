import { render, screen } from '@testing-library/react';
import App from './App';
import roomActions from './roomSlice'


describe('Room Slice', () => {

    beforeEach(() => {
        render(<roomSlice />)
    })

    test( 'sets room data in state' , () => {
        const testState = {
            room: [
              {
                id: 'Default',
                users: [],
                messages: [
                  {
                    user: '',
                    message: ''
                  }
                ]
              }
            ],
            searchValue: '',
            textInput: '' 
          }
          roomActions.setRoom(testState, testAction)
          expect(testState.room[0].id).toBe('Default')

    })



    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
      });
})