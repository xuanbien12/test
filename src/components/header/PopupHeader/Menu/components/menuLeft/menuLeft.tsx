import React from "react";
import { dataMenuLeft } from "../../../../dataHeader";

const menuLeft = () => { 
    return(
        <React.Fragment>
            {dataMenuLeft.map((it)=>{
                return(
                    <div key={it.id} className="flex w-[95%] h-fit pb-[10px] m-auto hover:bg-[#f2f2f2] rounded-[10px]">
                        <div className="w-[36px] h-[36px] mt-[4px] mr-[12px] mb-[8px]">
                            <img className="max-w-[36px]" src={it.img} alt="" />
                        </div>
                        <div>
                             <h4 className="text-[15px] font-semibold
                             ">{it.title}</h4>
                             <p className="text-[13px] text-[#898a8d]">{it.subTitle}</p>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default menuLeft