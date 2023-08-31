import React from "react";
import { dataAcc } from "../../../../dataHeader";

const ModeAcc = () => {
    return(
        <React.Fragment>
            {dataAcc.map((it) => {
                return(
                    <div className="flex w-[95%] m-auto h-[52px] items-center hover:bg-[#f2f2f2] rounded-[10px] cursor-pointer">
                        <div className="w-[36px] h-[36px] flex items-center justify-center my-[8px] mr-[12px] ml-[10px] rounded-[50%]">
                            <i className={`${it.icon} text-[20px]`}></i>
                        </div>
                        <div className="flex w-[72%] h-[52px] items-center">
                            <span className="text-[15px] font-medium">
                                {it.title}
                            </span>
                        </div>
                        <div className="flex w-[24px] h-[24px] justify-center items-center my-[12px] ml-[12px] text-[#626971]">
                            <i className={`${it.icon2} text-[20px]`}></i>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default ModeAcc