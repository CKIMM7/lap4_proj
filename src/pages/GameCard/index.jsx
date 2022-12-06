import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { gamesActions } from "../../store/store";
import { roomActions } from "../../store/roomSlice";

const GameCard = (data) => {

    console.log(data.username)

    const dispatch = useDispatch()
    let unshuffled = [...data.data.incorrect_answers]
    unshuffled.push({ answer: data.data.correct_answer })


let shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    const answerHandler = (ans) => {

        console.log(ans.ans)
        //find the user, mark the answer and remove the question
    
        //users: [{username: userId, score: score}]
        if(ans.ans) {
            console.log('remove question')
            dispatch(roomActions.removeQuestion(data.id))
        }

    }


let shuffledAnswers = shuffled.map((ans, index) => {
    return  <button onClick={answerHandler.bind(null, {ans: ans.answer})} key={index}
            >{ans.answer ? ans.answer : ans }
            </button>
    })  
    
    //console.log(shuffledAnswers)

    return (
    <li className='question'>
        question: {data.data.question} <br/>
        <ul>{shuffledAnswers}</ul>
    </li>
    )
}

export default GameCard;
