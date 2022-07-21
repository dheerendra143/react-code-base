import React from "react";

const Login = () => {
const isLoggedIn = false;
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
                    <input type="text" />
                </div>
                <div className="login-form-action">
                   <button>Reset</button>
                   <button>Login</button>
                </div>
            </form>
        </>
    )
}

export default Login;