import React from "react";
import { isCorrectMail } from "../../utils/fieldsValidation.js"
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

const Login = () => {
const isLoggedIn = false;
let navigate = useNavigate();
    return (
        <>
            <h4>Login</h4>
            <form className="login-form">
                <div className="login-form-username">
                    <label>Username:</label>
                    <input type="text" />
                </div>
                <div className="login-form-password">
                    <label>Username:</label>
                    {isCorrectMail("kkjjlk@hg.com")? "true" : "false"}
                    <input type="text"  />
                </div>
                <div className="login-form-action">
                   <button onClick={()=>navigate("/")}>Cancel</button>
                   <button>Login</button>
                </div>
            </form>
        </>
    )
}

export default Login;