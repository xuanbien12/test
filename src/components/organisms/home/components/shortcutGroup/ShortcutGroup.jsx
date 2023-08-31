import React from 'react'

const ShortcutGroup = (props) => {
    const { img, title } = props.item
    return (
        <div className='hover:rounded-[10px] hover:bg-[#e4e6eb]  flex items-center'>
            <img className='w-7 h-7 mr-3 rounded-[5px] ' src={img} alt="" />
            <span className='inline-block py-3' title={title} >{title}</span>
        </div>
    )
}
export default ShortcutGroup