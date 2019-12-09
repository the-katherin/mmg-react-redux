import React from 'react';
import { Link } from "react-router-dom";
import './NotFoundPage.css';

const NotFoundPage = () => (

    <div className="not-found-window">

        <h2>Unfortenately, the page you're looking for isn't found :(</h2>

        <Link to='/form' className='not-found-window__button'>
            <button >
                Got to form selection window
             </button>
        </Link>
    </div>
);

export default NotFoundPage;