import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleGoogle = ()=>{

    }
    return (
        <div className=''>
            <div className='flex'>
                <form >
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name='email' id='email' required />
                    <label htmlFor="email">
                        Password
                    </label>
                    <input type="password" name='password' id='password' required />
                    <label htmlFor="email">
                        Confirm Password
                    </label>
                    <input type="password" name='confirm-password' id='confirm-password' required />

                    <button>Log in</button>
                </form>
                <p>Already have an account?</p><Link to='/login'>Log in</Link> 

                <p>or</p>
                <button onClick={handleGoogle}>continue with google</button>
            </div>
        </div>
    );
};

export default Login;