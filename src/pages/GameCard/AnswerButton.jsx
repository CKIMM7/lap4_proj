import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';
import useUserStatus from "../../hooks/useUserStatus";

const AnswerButton = (ans) => {

    const veryAnswerHandler = (ans) => {
        console.log(ans)
    }

    

    console.log(ans)

    return (
        // <button onClick={veryAnswerHandler}>
        //     {ans.answer ? ans.answer : ans }</button>
        <>answer</>    
        )
}

export default AnswerButton;
