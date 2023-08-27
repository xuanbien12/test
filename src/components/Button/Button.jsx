import React from 'react'

const Button = ({ chilldren, props }) => {
    const { onClick, type } = props
    return (
        <button onClick={onClick} type={type} >{chilldren}</button>
    )
}
export default Button