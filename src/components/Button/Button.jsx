import React from 'react'

const Button = (props) => {
    const { onClick, type, className, children } = props

    return (
        <button className={className} onClick={onClick} type={type} >{children}</button>
    )
}
export default Button