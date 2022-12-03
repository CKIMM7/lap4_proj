import React, { useState } from 'react';

const listOfCategory = [
    {id: 23, subject: 'history' },
    {id: 17, subject: 'science&nature' },
    {id: 21, subject: 'sports' }
]

const Topic = ({ topic }) => {

    const [category, setCategory] = useState(23)

    const handleCategory = (e) => {
        const subject = e.target.value;
        console.log('subject: '+subject)
        
        listOfCategory.find(s => {
            // double check this with using redux
            if(s.subject === subject) setCategory(s.id)
        })
    }

    return <div id='list-of-topics'>
        <button type="button" className='topic' onClick={handleCategory} value='history' >
            <h3>History</h3>
            <div className='topic-info'>
                <p>Topic Info</p>
            </div>
        </button> 
        <button type="button" className='topic' onClick={handleCategory} value='science&nature' >
            <h3>Science & Nature</h3>
            <div className='topic-info'>
                <p>Topic Info</p>
            </div>
        </button> 
        <button type="button" className='topic' onClick={handleCategory} value='sports' >
            <h3>Sports</h3>
            <div className='topic-info'>
                <p>Topic Info</p>
            </div>
        </button>
    </div>
}

export default Topic;