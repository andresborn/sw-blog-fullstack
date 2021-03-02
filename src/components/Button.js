import React from "react";


const Button = ({ content, className, type }) => {
    return (
        
            <button 
            type={type}
            style={{ width: "6rem" }} className={`btn ${className}`}>
                {content}
            </button>
    );
};
export default Button;
