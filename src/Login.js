import React from "react";
import { loginUrl } from "./spotify";
// Styles
import './Login.css';

function Login() {
    return ( 
        <div className="login">
            <img src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
            <a href={loginUrl}>LOGIN SPOTIFY WITH SPOTIFY</a>
        </div>
     );
}

export default Login;