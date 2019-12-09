import React from 'react';

const LevelFieldset = () => (
    <fieldset className='level-fieldset' name='level'>

        <legend>Choose level</legend>

        <div className="level-fieldset__radios">

            <div>

                <input type="radio" name='level' id='easy' value="3" required />
                <label htmlFor="easy">Easy</label>

            </div>

            <div>

                <input type="radio" name='level' id='medium' value="6" />
                <label htmlFor="medium">Medium</label>

            </div>

            <div>

                <input type="radio" name='level' id='professional' value="12" />
                <label htmlFor="professional">Professional</label>
            </div>

        </div>
    </fieldset>
);

export default LevelFieldset;