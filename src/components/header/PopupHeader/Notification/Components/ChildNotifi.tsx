import React from "react";
import { dataNotifi } from "../../../dataHeader";

const ChildNotifi = () => {
    return(
        <React.Fragment>
            {dataNotifi.map((it)=>{
                return(
                    <div key={it.id} className="flex w-[90%] m-auto cursor-pointer hover:bg-[#f2f2f2] h-fit justify-around mb-[20px] rounded-[10px]">
                        <div className="w-[56px] h-[56px] mt-[10px] mb-[5px] ml-[10px]">
                           <img className="max-w-[56px] rounded-[50%]" src={it.img} alt="" />
                        </div>
                        <div className="w-[75%] m-auto mt-[10px] pb-[10px]">
                            <p>{it.text}</p>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default ChildNotifi