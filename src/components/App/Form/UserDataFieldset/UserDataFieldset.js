import React from 'react';

const UserDataFieldset = () => (
    <fieldset className='user-data-fieldset' name='userData'>

        <legend>Fill the form below</legend>

        <div className="user-data-fieldset__inputs-grid">

            <div>
                <input type="text" id='userName' placeholder='Enter your first name' pattern='[A-Za-zА-Яа-яЁё]{1,15}' required />
            </div>

            <div>
                <input type="text" id="userLastName" placeholder='Enter your last name' pattern='[A-Za-zА-Яа-яЁё]{1,15}' required />
            </div>

            <div>
                <input type="email" id='email' placeholder='Enter your email' required />
            </div>

        </div>

    </fieldset>
);

export default UserDataFieldset;