import React from 'react'
import { Link } from 'react-router-dom'
const RulesHome = (props) => {
    const { title, icon } = props.item
    return (
        <li className=' text-[#65676b] flex items-center  '>
            <Link className='hover:underline  text-[13px]'>{title}</Link>
            <span className='mx-1  ' >.</span>
            {icon &&
                <i className={`bg-[url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/L1k-kkbTA1u.png")] `}></i>}
        </li>
    )
}
export default RulesHome