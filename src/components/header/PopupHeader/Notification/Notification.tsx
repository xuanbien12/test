import React from "react";
import {BsThreeDots} from "react-icons/bs"
import ChildNotifi from "./Components/ChildNotifi";

const Notification = () => {
return(
<section className="absolute bg-[#ffffff] w-[360px] max-h-[632px] top-[-4px] right-[-60px] rounded-[15px]  shadow-2xl">
    <div className="flex justify-between w-[90%] mt-[20px] mb-[12px] m-auto items-center cursor-pointer">
        <div>
            <p className="text-[24px] font-bold">Thông báo</p>
        </div>
        <div className="w-[32px]">
            <BsThreeDots className="text-[20px]" />
        </div>
    </div>
    <div className="w-[90%] m-auto">
        <button className="border-2 border-solid rounded-[10px] w-[65px] mr-[12px] hover:bg-[#f2f2f2] focus:text-[#257ef3] focus:bg-[#e7f3ff] font-semibold">Tất cả</button>
        <button className="border-2 border-solid rounded-[10px] w-[80px] hover:bg-[#f2f2f2] focus:text-[#257ef3] focus:bg-[#e7f3ff] font-semibold">Chưa đọc</button>
    </div>
    <div className="flex justify-between w-[90%] m-auto mt-[20px] mb-[4px]">
        <div>
            <h2 className="text-[18px] font-medium">Trước đó</h2>
        </div>
        <div className="w-[85px] h-[30px] flex justify-center items-center rounded-[20px] hover:bg-[#f2f2f2]">
            <span className="text-[#216FDB] cursor-pointer">Xem tất cả</span>
        </div>
    </div>
    <ChildNotifi/>
</section>
)
}

export default Notification