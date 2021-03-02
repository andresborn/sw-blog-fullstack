import React from "react";
import Button from "../components/Button";

const Login = () => {
    return (
        <div
            style={{ minHeight: "90vh" }}
            className="container text-white d-flex justify-content-center align-items-center"
        >
            <div className="breadcrumb bg-secondary p-4">
                <form className="d-flex flex-column justify-content-center">
                    <div className="form-group d-flex flex-column">
                        <label htmlFor="username">Username</label>
                        <input
                            className="form-control"
                            id="username"
                            required
                            type="text"
                        />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            id="password"
                            required
                            type="password"
                        />
                    </div>
                    <Button type="submit" content="Log In" className="btn-warning" />
                </form>
            </div>
        </div>
    );
};

export default Login;
