import React, { useState } from "react";
import Button from "../components/Button";

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log(username, email, password)
    }


    return (
        <div
            style={{ minHeight: "90vh" }}
            className="container d-flex justify-content-center align-items-center"
        >
            <div className="breadcrumb bg-warning p-4">
                <form 
                onSubmit={(e) => handleSubmit(e)} 
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
                        <label htmlFor="email">Email</label>
                        <input
                        className="form-control"
                            id="email"
                            required
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                    <Button 
                    type="submit"
                    content="Register" className="btn-secondary"/>
                </form>
            </div>
        </div>
    );
};

export default Register;
