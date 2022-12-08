
import axios from 'axios';

export const getGamesAxio = async(amount, category, difficulty, type) => {

    // console.log('getGamesAxio')   
    // console.log(amount)
    // console.log(category)
    // console.log(difficulty)
    // console.log(type)

    let searchUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

    let testUrl = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'

    const response = await axios.get(searchUrl);   
    return response.data;
}
