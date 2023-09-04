import React from "react";
import {BsThreeDots} from "react-icons/bs"
import {MdZoomOutMap} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import {BsSearchHeartFill} from 'react-icons/bs'
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import ChildMess from "./Components/ChildMess";

const Messenger = () => {
    return(
        <section className="absolute w-[360px] border-solid bg-[#ffffff] top-[-4px] right-[-105px] rounded-[15px] max-h-[90vh] overflow-y-auto shadow-2xl">
            <header className="flex justify-around items-center mb-[10px]">
                <div className="ml-[-55px]">
                    <p>
                        <b className="text-[27px]">Chat</b>
                    </p>
                </div>
                <div className="flex w-[120px] justify-between mr-[-55px]">
                    <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[50%] hover:bg-[#f2f2f2] cursor-pointer">
                        <BsThreeDots className="text-[20px]"/>
                    </div>
                    <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[50%] hover:bg-[#f2f2f2] cursor-pointer">
                        <MdZoomOutMap className="text-[20px]"/>
                    </div>
                    <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[50%] hover:bg-[#f2f2f2] cursor-pointer">
                        <FiEdit className="text-[20px]"/>
                    </div>
                </div>
            </header>
            <div className="flex w-[92%] h-[36px] m-auto mb-[15px] items-center relative">
                <span className="absolute left-[10px]">
                    <BsSearchHeartFill className="text-[16px]"/>
                </span>
                <input className="w-[100%] rounded-[20px] h-[36px] pl-[35px] bg-[#f0f2f5] focus:outline-none"
                    type="text" 
                    placeholder="Tìm kiếm trên messenger" 
                />
            </div>
            <div className="flex ml-[15px]">
                <button className="border-2 border-solid rounded-[10px] w-[65px] mr-[12px] hover:bg-[#f2f2f2] focus:text-[#257ef3] focus:bg-[#e7f3ff] font-semibold">Hộp thư</button>
                <button className="border-2 border-solid rounded-[10px] w-[80px] hover:bg-[#f2f2f2] focus:text-[#257ef3] focus:bg-[#e7f3ff] font-semibold">Cộng đồng</button>
            </div>
            <div className="">
                <ChildMess/>
            </div>
            <div className="py-[10px]">
                <p className="w-fit m-auto text-[#216fdb]">
                    Xem tất cả trong Messenger
                </p>
            </div>
        </section>
    )
}

export default Messenger