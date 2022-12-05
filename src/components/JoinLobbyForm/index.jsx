import React, { useState } from 'react';

const JoinLobbyForm = () => {

    const [textInput, setTextInput] = useState('')

    function handleChange(e) {
        setTextInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="lobby-input">Enter Lobby ID:</label>
                <input id="lobby-input" type="text" value={textInput} onChange={handleChange} />
                <input type="submit" value="Enter" />
            </form>
        </>
    )
}

export default JoinLobbyForm;