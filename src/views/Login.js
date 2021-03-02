import React from 'react'

const Login = () => {

    
    return (
        <div style={{minHeight: "90vh"}} className="container text-white d-flex justify-content-center align-items-center">
        <div className="breadcrumb bg-secondary p-4">
        <form className="d-flex flex-column justify-content-center">
            <div className="form-group d-flex flex-column">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    required
                    type="text"
                    placeholder="Username"
                />
            </div>
            <div className="form-group d-flex flex-column">
            <label htmlFor="password">Password</label>
            <input id="password" required type="password" placeholder="Password" />
            </div>
            <div>
                <button style={{width: "6rem"}} className="btn btn-warning">Register</button>
            </div>
        </form>
        </div>
        </div>
    )
}

export default Login