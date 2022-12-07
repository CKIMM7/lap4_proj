import React from "react";
import './index.css';

const Header = props => {

    

    return (
            <div className="start">
                <div className="header">
                    <h1>Quizcade!</h1>
                        <p className="welcome">Welcome to our trivia-based quiz game where we test your intellectual mettle. </p>
                </div>   
                <div  id="maincontainer" className="nes-container is-dark with-title">
                    <p className="title" id="howto">How to Play</p>
                    <h3>Playing is pretty simple, the answers might not be...</h3>
                    <ol>
                        <li className="first">Clicking the button below will prompt you to create a 4-letter username that you will use to identify your score at the end of each game.</li>
                        <li className="second">You will then be prompted to either create a lobby or join one.</li>
                        <li className="first">If you create a lobby, choose a topic then a respective difficulty to begin and wait for other players to join.</li>
                        <li className="second">If you join a lobby you will be shown a list of games by topic and difficulty. Choose what you fancy!</li>
                        <li className="first">Once the game begins, you only have 15 seconds to answer each question, so be hasty!</li>
                        <li className="second">Read the question thoroughly, then click on one of the 4 options. You'll know if you're right or wrong.</li>
                        <li className="first">And that's it! At the end of the round you can see your score and compare it to the leaderboards. Don't be too competitive...</li>
                    </ol>
                </div>


                        
                    
                
            </div>
            )
    }

export default Header;

