import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { gamesActions } from "../../store/store";
import { roomActions } from "../../store/roomSlice";
import useUserStatus from '../../hooks/useUserStatus'
import "nes.css/css/nes.min.css";

const GameCard = (data) => {

    console.log(data.username)
    const { updateQuestionStatus } = useUserStatus()
    const dispatch = useDispatch()
    let unshuffled = [...data.data.incorrect_answers]
    unshuffled.push({ answer: data.data.correct_answer })


    let shuffled = unshuffled
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    const answerHandler = (ans) => {
        //wrong answer
        // dispatch(roomActions.updateQuestionState(data.id))
        //update status in the server
        updateQuestionStatus(data)
        console.log(ans)
        //right answer
        if (ans.ans) {
            console.log('correct answer')
            updateQuestionStatus(data, ans.ans)
        }
        else {
            updateQuestionStatus(data, false)
        }
    }


    let shuffledAnswers = shuffled.map((ans, index) => {
        return <button className="nes-btn is-primary" onClick={answerHandler.bind(null, { ans: ans.answer })} key={index}
        >{ans.answer ? ans.answer : ans}
        </button>
    })

    //console.log(shuffledAnswers)

    return (
        <div className='question'>
            <div className="questionblock">
                <h2 id="questiontitle">Question: {data.data.question} </h2>
            </div>
            <div className="nes-container is-rounded is-dark" id="shuffledanswers">{shuffledAnswers}</div>
        </div>
    )
}

export default GameCard;
