import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';
import Rockets from '../Rockets'
import { motion } from 'framer-motion';

import './Category.css'

const listOfCategory = [
    { id: 23, subject: 'history', desc: 'Think you can handle the past? Choose history to see how much you know about the lifetime of our planet.' },
    { id: 17, subject: 'science&nature', desc: 'Do you know what the mass of the Sun is? Or perhaps the role of the mitochondria? Make sure you are ready to be tested!' },
    { id: 21, subject: 'sports', desc: 'I think we all know the fast 100m time run by none other than Usain Bolt. But can you tell me length of a standard football field?' }
]

const Category = ({ }) => {
    const dispatch = useDispatch();
    let category = useSelector(state => state.user.category);

    const handleCategory = (e, id) => {
        // const subject = e.target.value;
        console.log('subject: ' + id)
        updateInput(e, id)
        category = ''

    }

    function updateInput(e, id) {
        console.log(`${id} selected`)
        listOfCategory.find(s => {
            if (s.subject === id) {
                category = s.id
                dispatch(usersActions.setCategory(category))
            }
        })
    }

    return (
        <div className="pagecover">
            <h1 id="creategame">Create Game</h1>
            <h2 id="instructions">First, select a category to get started</h2>
            <div id='listofcategories'>
                <div className="catcont" id="historycont">
                    <h3 className='cattitle'>History</h3>
                    <div className='category-info'>
                        <p className="catdesc">{listOfCategory[0].desc}</p>
                    </div>
                    <button type="button" className='nes-btn is-primary' onClick={(e) => handleCategory(e, 'history')}
                        id='history' value={category} >Select This Category</button>
                </div>
                <div className="catcont" id="scicont">
                    <h3 className='cattitle'>Science & Nature</h3>
                    <div className='category-info'>
                        <p className="catdesc">{listOfCategory[1].desc}</p>
                    </div>
                    <button type="button" className='nes-btn is-primary' onClick={(e) => handleCategory(e, 'science&nature')}
                        id='science&nature' value={category} >Select This Category</button>
                </div>
                <div className="catcont" id="sportcont">
                    <h3 className='cattitle'>Sports</h3>
                    <div className='category-info'>
                        <p className="catdesc">{listOfCategory[2].desc}</p>
                    </div>
                    <button type="button" className='nes-btn is-primary' onClick={(e) => handleCategory(e, 'sports')}
                        id='sports' value={category} >Select This Category</button>
                </div>
            </div>
            <Rockets />
        </div>
    )
}

export default Category;
