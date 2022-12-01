import axios from 'axios'

export const getGamesAxio = async(amount, category, difficulty, type) => {


    let searchUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
    const response = await axios.get(searchUrl);   
    return response.data;
}
