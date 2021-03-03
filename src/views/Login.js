import React, { useState, useContext } from "react";
import Button from "../components/Button";
import { Context } from "../store/AppContext"
import { Redirect } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)

    const { actions } = useContext(Context)

    const handleSubmit = async e => {
        e.preventDefault()
        if (username === "" || password === "") return alert("Please fill the required information")
        const info = {"username": username, "password": password}
        const response = await actions.postData("https://3000-pink-skunk-wepde99x.ws-us03.gitpod.io/login", info)
        if (response.error) return alert(response.error)
        sessionStorage.setItem("token", response.token)
        sessionStorage.setItem("username", response.user.username)
        setRedirect(true)
    }

    return (
        <div
            style={{ minHeight: "90vh" }}
            className="container text-white d-flex justify-content-center align-items-center"
        >
            <div className="breadcrumb bg-secondary p-4">
                <form
                onSubmit={e => handleSubmit(e)} 
                className="d-flex flex-column justify-content-center">
                    <div className="form-group d-flex flex-column">
                        <label htmlFor="username">Username</label>
                        <input
                            className="form-control"
                            id="username"
                            required
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            id="password"
                            required
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" content="Log In" className="btn-warning" />
                </form>
            </div>
            {redirect && <Redirect to="/sw-blog-fullstack/" />}
        </div>
    );
};

export default Login;
