import React from "react";
import { Link } from "react-router-dom";

const Button = ({ content, className, linkTo }) => {
    return (
        <Link to={linkTo}>
            <div style={{ width: "6rem" }} className={`btn ${className}`}>
                {content}
            </div>
        </Link>
    );
};
export default Button;
