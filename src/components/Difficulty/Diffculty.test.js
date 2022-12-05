/**
 * @jest-environment jsdom
 */

 import { render, screen, fireEvent } from '@testing-library/react';
 import Difficulty from './index'
 
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

    test('updateInput sets level selected successfully', () => {
        const btnElement = screen.getByText(/Beginner/i);
        expect(btnElement.value).toBe(levelProp)
    })
})