import React from 'react';
import Auth from './Auth.js';

function Homepage(props) {

    return(
        <div>
            This is the homepage.
            <button onClick={() => 
                Auth.login(() => {
                    props.history.push("/protected")
                })}>Login</button>
        </div>
    )
}

export default Homepage;