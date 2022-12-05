import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getGamesAxio } from "../api/axios";
import { gamesActions } from "../store/store";

const useGetGames = (amount=1, category=7, difficulty='easy', type='multiple') => {

    const [status, setStatus] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        setStatus(true)
        dispatch(gamesActions.setIsLoading(true))
        dispatch(gamesActions.setIsError(false))
        dispatch(gamesActions.setError({}))

        const controller = new AbortController();
        const { signal } = controller;
    
        getGamesAxio(amount, category, difficulty, type)
        .then(data => {
            console.log(data); 
            setStatus(false)
            dispatch(gamesActions.setGamesData(data.results))
            dispatch(gamesActions.setIsLoading(false))
            dispatch(gamesActions.setIsError(false))
        })
        .catch((err)=> {
            setStatus(false)
            dispatch(gamesActions.setIsLoading(false))
            //signal.aborted happens when controller.abort() gets called
            //by the user therefore do not need to return the err msg
            if(signal.aborted) return;
            dispatch(gamesActions.setIsError(true))
            dispatch(gamesActions.setError({ message: err.message }))
        })

        return () => controller.abort();    

    }, [])

    return { status };
}

export default useGetGames;
