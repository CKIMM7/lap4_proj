import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { gamesActions } from "../../store/store";

const GameCard = (data, indexQ) => {

    const dispatch = useDispatch()
    let unshuffled = [...data.data.incorrect_answers]
    unshuffled.push({ answer: data.data.correct_answer })

let shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    //console.log(shuffled)

    const veryAnswerHandler = (ans) => {

        console.log(ans.ans)

        if(ans.ans) {
            console.log('remove question')
            dispatch(gamesActions.removeQuestion())
        }

    }


let shuffledAnswers = shuffled.map((ans, index) => {
    return  <button onClick={veryAnswerHandler.bind(null, {ans: ans.answer, indexQ})} key={index}
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
