import { useSelector, useDispatch } from 'react-redux';
import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';

export default function GameSettings ({ data }) {
    const dispatch = useDispatch()
    const { status } = useGetGames(10, 11, 'easy', 'multiple')
    const chosenTopic = useSelector(state => state.user.topic)
    //console.log(gamesData)
   
    const chooseTopicHandler = (data) => {
        console.log(data)
        dispatch(usersActions.setTopic(data))
    }

    const chooseDifficultyHandler = (data) => {
        console.log(data)
        dispatch(usersActions.setTopic(data))
    }

    let chooseTopic = <>
        <h2>Choose a topic</h2>
        <ul>
            <button onClick={() => chooseTopicHandler(23)}>history</button>
            <button onClick={() => chooseTopicHandler(11)}>pop</button>
            <button onClick={() => chooseTopicHandler(18)}>science</button>
        </ul>
    </>

    let chooseDifficulty = <>
    <h2>Choose a topic</h2>
        <ul>
            <button onClick={() => chooseTopicHandler(23)}>easy</button>
            <button onClick={() => chooseTopicHandler(11)}>difficult</button>
        </ul>
    </>
    return (
        <div id='game-settings' className="gameSettings">
            <h2>game settings</h2>
            {chosenTopic}
            {!chosenTopic && chooseTopic}
            {chosenTopic && chooseDifficulty}
      </div>
    )
  }
