import React from 'react'


const Button = ({content, className}) => {
    return (
        <div style={{width:'6rem'}} className={`btn ${className}`}>
            {content}
        </div>
    )
}
export default Button