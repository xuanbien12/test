import React from "react";
import { Input } from 'antd'
const NavbarTable = (props: any) => {

    return (
        <div className=" flex  gap-[23px] ">

            <div className='border border-[#000]  rounded-[10px] relative'>
                <Input className="h-[50px] min-w-[270px]   rounded-[10px]" />
                <svg className="absolute top-1.5 right-2" xmlns="http://www.w3.org/2000/svg" width="47" height="39" viewBox="0 0 47 39" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.5368 21.6723C21.3928 23.7071 18.3859 25 14.9655 25C8.16555 25 3 19.8898 3 14C3 8.11018 8.16555 3 14.9655 3C21.7655 3 26.931 8.11018 26.931 14C26.931 16.5815 25.9387 19.0132 24.2514 20.9305C24.0132 21.092 23.7991 21.2977 23.6219 21.5454C23.592 21.5871 23.5637 21.6295 23.5368 21.6723ZM24.1896 25.0253C21.6478 26.8889 18.4453 28 14.9655 28C6.70029 28 0 21.732 0 14C0 6.26801 6.70029 0 14.9655 0C23.2307 0 29.931 6.26801 29.931 14C29.931 16.708 29.1091 19.2365 27.686 21.3789L45.2821 33.9667C46.4051 34.77 46.6642 36.3316 45.8609 37.4546C45.0575 38.5775 43.496 38.8366 42.373 38.0333L24.2006 25.0333C24.1969 25.0307 24.1932 25.028 24.1896 25.0253Z" fill="black" />
                </svg>
            </div>

        </div>
    )
}
export default NavbarTable