import React from 'react';
import { useSelector } from 'react-redux';

const Count = () => {

    let count = useSelector(state => state.room.count)

    return <>
        <p>{count}</p>
    </>
}

export default Count;