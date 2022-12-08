import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGetGames from "../../hooks/useGetGames";
import { usersActions } from '../../store/usersSlice';
import { motion, LayoutGroup } from 'framer-motion';


import './Category.css'

const listOfCategory = [
    {id: 23, subject: 'history', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    {id: 17, subject: 'science&nature', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    {id: 21, subject: 'sports', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
]

const Category = ({ }) => {
    const [isOpen, setIsOpen] = useState(false);
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

    const handleHover = (e) => {
        console.log(e.target.id)
        setIsOpen(!isOpen)
    }

    return (
        <main>
            <div id='choosecategory' className="choosecategory">
                <h1>Pick a Category!</h1>
                <h2>Test your wit with three categories to choose from.</h2>
            </div>
            
        <div id='list-of-categories'>
            <LayoutGroup>
            <motion.div layoutId="history "id="historycard" layout transition={{ layout: { duration: 0.7, type: "spring" } }} onHoverStart={() => setIsOpen(!isOpen)} onHoverEnd={() => setIsOpen(!isOpen)} className="nes-container is-rounded is-dark">
                <motion.h3 layout="position" className="categorytitle">History</motion.h3>
                {isOpen && ( 
                    <motion.div
                    className='category-info'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                        <p className="description">{ listOfCategory[0].desc }</p>
                        <button type="button" className='category' onClick={(e) => handleCategory(e, 'history')} 
                         id='history' value={category} >Choose</button>
                    </motion.div> 
                    )} 
            </motion.div>
            
            <motion.div layoutId="science" id="sciencecard" layout transition={{ layout: { duration: 0.7, type: "spring" } }} onHoverStart={() => setIsOpen(!isOpen)} onHoverEnd={() => setIsOpen(!isOpen)} className="nes-container is-rounded is-dark">
                <motion.h3 layout="position" className="categorytitle">Science & Nature</motion.h3>
                {isOpen && (
                    <motion.div
                    className='category-info'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                        <p className="description">{ listOfCategory[1].desc }</p>
                        <button type="button" className='category' onClick={(e) => handleCategory(e, 'science&nature')} 
                         id='science&nature' value={category} >Choose</button>
                    </motion.div>
                    )}
            </motion.div> 
            <motion.div id="sportscard" layout transition={{ layout: { duration: 0.7, type: "spring" } }} onHoverStart={() => setIsOpen(!isOpen)} onHoverEnd={() => setIsOpen(!isOpen)} className="nes-container is-rounded is-dark">
                <motion.h3 layout="position" className="categorytitle">Sports</motion.h3>
                {isOpen && (
                    <motion.div 
                    className='category-info'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                        <p className="description">{ listOfCategory[2].desc }</p>
                        <button type="button" className='category' onClick={(e) => handleCategory(e, 'sports')} 
                         id='sports' value={category} >Choose</button>
                    </motion.div>
                    )}
            </motion.div>
            </LayoutGroup>
        </div>
        
        </main>
    )
}

export default Category;
