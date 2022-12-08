import React, { useState } from 'react';

const UsernameForm = () => {

    const [ textInput, setTextInput ] = useState('')

    function handleChange(e) {
        setTextInput(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        console.log(e.target.value)
    } 

    return (
        <>
            <form role='form' onSubmit={handleSubmit}>
                <label htmlFor="username-input">Enter Username:</label>
                <input role='input' id="username-input" type="text" value={ textInput } onChange={ handleChange } />
                <input type="submit" value="Enter" />
            </form>
        </>
    )
}

export default UsernameForm;