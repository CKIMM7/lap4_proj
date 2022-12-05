import React from 'react';

const listOfCategory = [
    {id: 23, subject: 'history' },
    {id: 17, subject: 'science&nature' },
    {id: 21, subject: 'sports' }
]

const Topic = ({ topic }) => {

    const handleCategory = (e, id) => {
        // const subject = e.target.value;
        console.log('subject: '+id)
        updateInput(e, id)
        topic = ''
    }

    function updateInput(e, id){
        console.log(`${id} selected`)
        listOfCategory.find(s => {
            // double check this with using redux
            if(s.subject === id) topic = s.id
        })
    }

    return <div id='list-of-topics'>
        <button type="button" className='topic' onClick={(e) => handleCategory(e, 'history')} 
        id='history' value={topic} >
            <h3>History</h3>
            <div className='topic-info'>
                <p>Topic Info</p>
            </div>
        </button> 
        <button type="button" className='topic' onClick={(e) => handleCategory(e, 'science&nature')} 
        id='science&nature' value={topic} >
            <h3>Science & Nature</h3>
            <div className='topic-info'>
                <p>Topic Info</p>
            </div>
        </button> 
        <button type="button" className='topic' onClick={(e) => handleCategory(e, 'sports')} 
        id='sports' value={topic} >
            <h3>Sports</h3>
            <div className='topic-info'>
                <p>Topic Info</p>
            </div>
        </button>
    </div>
}

export default Topic;

// need add topic description
