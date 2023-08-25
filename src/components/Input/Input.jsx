import React from 'react'

const Input = (props) => {
    const { name, type, onChange, value, placeholder } = props
    return (
        <input type={type} onChange={onChange} value={value} name={name} placeholder={placeholder} />
    )
}
export default Input