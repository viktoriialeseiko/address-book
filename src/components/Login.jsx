import React from 'react';
import {useNavigate} from 'react-router-dom';

import './login.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    };

    function handleClick() {
        navigate('/contacts');
    }

    // JSX code for login form
    const renderForm = (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className='title'>Login</div>
                <div>
                    <input
                        type='text'
                        placeholder='user name'
                        className='name'
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='password'
                        className='name'
                        minlength='1'
                        name='password'
                        required
                    />
                </div>
                <div className='button-container'>
                    <button onClick={() => handleClick()} type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );

    return (
        <div className='app'>
            <div className='login-form'>{renderForm}</div>
        </div>
    );
}

export default Login;
