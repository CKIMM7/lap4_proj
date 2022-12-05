import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';

import './Category.css'

const listOfCategory = [
    {id: 23, subject: 'history', desc: 'history desc...' },
    {id: 17, subject: 'science&nature', desc: 'sci & nature desc...' },
    {id: 21, subject: 'sports', desc: 'sports desc...' }
]

const Category = ({ }) => {

    const dispatch = useDispatch();
    let category = useSelector(state => state.user.category);

    const handleCategory = (e, id) => {
        // const subject = e.target.value;
        console.log('subject: '+id)
        updateInput(e, id)
        category = ''
        
    }

    function updateInput(e, id){
        console.log(`${id} selected`)
        listOfCategory.find(s => {
            if(s.subject === id) {
                category = s.id
                dispatch(usersActions.setCategory(category))
            }
        })
    }

    return <div id='list-of-categorys'>
        <button type="button" className='category' onClick={(e) => handleCategory(e, 'history')} 
        id='history' value={category} >
            <h3>History</h3> 
            <div className='category-info'>
                <p>{ listOfCategory[0].desc }</p>
            </div>
        </button> 
        <button type="button" className='category' onClick={(e) => handleCategory(e, 'science&nature')} 
        id='science&nature' value={category} >
            <h3>Science & Nature</h3>
            <div className='category-info'>
            <p>{ listOfCategory[1].desc }</p>
            </div>
        </button> 
        <button type="button" className='category' onClick={(e) => handleCategory(e, 'sports')} 
        id='sports' value={category} >
            <h3>Sports</h3>
            <div className='category-info'>
            <p>{ listOfCategory[2].desc }</p>
            </div>
        </button>
    </div>
}

export default Category;
