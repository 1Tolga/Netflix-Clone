import React from 'react';
import "./SignupScreen.css";

function SignupScreen() {
    return (
        <div className='signupScreen'>
            <form>
                <input placeholder='Email' type="email"/>
                <input placeholder='Password' type="password"/>
                <button type="submit">Sign Up</button>
                <h4>
                    
                </h4>
            </form>
            
        </div>
    );
}

export default SignupScreen;