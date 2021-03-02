import React from "react";

const Register = () => {

    
    return (
        <div
            style={{ minHeight: "90vh" }}
            className="container d-flex justify-content-center align-items-center"
        >
            <div className="breadcrumb bg-warning p-4">
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
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            required
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            required
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <button
                            style={{ width: "6rem" }}
                            className="btn btn-secondary"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
