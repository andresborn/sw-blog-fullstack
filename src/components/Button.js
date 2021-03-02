import React from 'react'


const Button = ({content, className}) => {
    return (
        <div className={`btn ${className}`}>
            {content}
        </div>
    )
}
export default Button