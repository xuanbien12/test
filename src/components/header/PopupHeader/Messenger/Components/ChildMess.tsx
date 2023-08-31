import React from "react";
import { dataMess } from "../../../dataHeader";

const ChildMess = () => {
    return(
        <React.Fragment>
            {dataMess.map((it)=>{
                return(
                    <div key={it.id} className="flex items-center ml-[7px] mx-[8px] my-[12px] hover:bg-[#f2f2f2] rounded-[10px] cursor-pointer">
                        <div className="w-[56px] m-[10px]">
                            <img alt="Xôi Xéo🩴" className="x1lliihq x193iq5w x1us19tq xl1xv1r rounded-[50%]"
                                src={it.img}></img>
                        </div>
                        <div>
                            <p className="font-bold text-[16px] flex items-center">
                               {it.title}
                                <span className="ml-[5px]">
                                    <img height="16" width="16" alt="🩴"
                                        src={it.icon}></img>
                                </span>
                            </p>
                            <span>
                               {it.text}
                            </span>
                            <span>{it.time}</span>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default ChildMess