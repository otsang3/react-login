import React from 'react';
import Auth from './Auth.js';

function LoginPage(props) {

    return(
        <div>
            You have successfully logged in! This is a protected page and can only be accessed when logged in.
            <button onClick={() => {
                Auth.logout(() => {
                    props.history.push("/homepage")
                })
            }}>Log out</button>
        </div>
    )
}

export default LoginPage;