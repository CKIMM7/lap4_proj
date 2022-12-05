import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';
import axios from 'axios';


const FetchTravia = () => {

    const [mode, setMode] = useState('easy')
    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const difficulty = useSelector(state => state.user.difficulty)
    const category = useSelector(state => state.user.category)
    // const [answers, setAnswers] = useState([
    //    { id: 0, set: [{id: 0, ans: ''}, {id: 1, ans: ''}, {id: 2, ans: ''}, {id: 3, ans: ''}] }
    // ])
    const [question, setQuestion] = useState()

    const [answers, setAnswers] = useState([
        {id: 0, ans: ''}, {id: 1, ans: ''}, {id: 2, ans: ''}, {id: 3, ans: ''}
    ])

    const listOfCategory = [
        {id: 23, subject: 'history' },
        {id: 17, subject: 'science&nature' },
        {id: 21, subject: 'sports' }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        getResults()
    }

    async function getResults(){
        try {
            const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
            const getData = await response.data
            console.log(getData.results)
            setData(getData.results)

            // getData.results.map((ele, j) => {
            //     console.log(ele.question)
            //     setQuestions(ele.question)

            //     // console.log(ele.correct_answer)

            //     // ele.incorrect_answers.map((ans, i) => setAnswers({id: i, ans: ans}))
            //     // setAnswers({id: 3, ans: ele.correct_answer})
            // })

            for(let a=0; a<data.length; a++){
                // setQuestion(data[a].question)

                let count = 0
                while(count < 3) {
                    // console.log(data[a].incorrect_answers[count])
                    count++
                }
                // setAnswers()
            }
            
        } catch (err) {
            console.warn(err)
        }
    }

    function display(){
        console.log('data: '+data.question)
        return (data.results.map((ele, i) => <div id='questions'>
             <h3>{ele.question}</h3>
             {/* <button type='button'>{ele.correct_answer}</button> */}
        {/* {ele.incorrectAnswers.map(a => { 
                <button type='button'>{a}</button>
            })} */}
        </div> ))
    }

    const handleMode = (e) => {
        // const text = e.target.options[e.target.selectedIndex].text;
        console.log('mode: '+e.target.value)

        dispatch(usersActions.setDifficulty(e.target.value))
        //setMode(e.target.value)
    }

    const handleCategory = (e) => {
        const subject = e.target.value;
        console.log('subject: '+subject)
        

        listOfCategory.find(s => {
            if(s.subject === subject) dispatch(usersActions.setCategory(s.id))
        })
    }

    return <>
        <h1>FetchTravia</h1>
        {difficulty} <br />
        {category}
        <form onSubmit={handleSubmit}>
            <label htmlFor="choose-mode">Choose a mode:</label>
            <select id="choose-mode" name="choose-mode" onChange={handleMode}>
                <option value="easy" defaultValue="selected">Beginner</option>
                <option value="medium">Intermediate</option>
                <option value="hard">Expert</option>
            </select><br/>
            <button type="button" onClick={handleCategory} value='history' >History</button>
            <button type="button" onClick={handleCategory} value='science&nature' >Science & Nature</button>
            <button type="button" onClick={handleCategory} value='sports' >Sports</button><br/>
            <input type="submit" value="Search"/>
        </form>
        
    </>
}

export default FetchTravia;

//https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
//'https://opentdb.com/api.php?amount=10&type=multiple'