import React from 'react';
import { Link } from "react-router-dom";

const WelcomeWindow = () => (
    <div className="welcome-window">
        <h1>Welcome to Match-Match Game!</h1>

        <div className="game-rules">

            <h2>How to play:</h2>
            <p>Memory is a counter game where the object is to find pairs.</p>

            <h2>To Play:</h2>
            <ol>
                <li>Select two cards to try to match the pictures.</li>
                <li>If you match the pictures you can go again.</li>
                <li>If they don't match the computer turns them back.</li>
                <li>The player who finds аll pairs wins!</li>
                <li>Have Fun!</li>
            </ol>

        </div>

        <Link to='/form'>
            <button>
                Got it!
             </button>
        </Link>
    </div>
);

export default WelcomeWindow;