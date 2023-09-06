import React from "react"
import { dataMenuRight } from "../../../../dataHeader"

const menuRight = () => {
    return(
        <React.Fragment>
            {dataMenuRight.map((it)=>{
                return(
                    <div key={it.id} className="flex w-[95%] h-[52px] m-auto items-center hover:bg-[#f2f2f2] rounded-[10px] cursor-pointer">
                        <div className="w-[36px] h-[36px] flex justify-center items-center rounded-[50%] bg-[#e2e4e9] ml-[5px] mr-[10px]">
                            <i className={`${it.icon} text-[20px]`}></i>
                        </div>
                        <div className="flex items-center w-[70%]">
                            <span className="text-[16px] font-semibold">{it.title}</span>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default menuRight