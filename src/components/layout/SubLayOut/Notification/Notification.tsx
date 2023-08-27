import React from "react";
import {BsThreeDots} from "react-icons/bs"

const Notification = () => {
    return(
        <section className="absolute bg-red-400 w-[360px] max-h-[632px] top-[56px] right-[38px] rounded-[15px]">
            <div className="flex justify-between w-[90%] mt-[20px] mb-[12px] m-auto items-center">
                <div>
                    <p className="text-[24px] font-bold">Thông báo</p>
                </div>
                <div className="w-[32px]">
                    <BsThreeDots className="text-[20px]"/>
                </div>
            </div>
            <div className="w-[90%] m-auto">
                <button className="border-2 border-solid rounded-[10px] w-[65px] mr-[12px]">Tất cả</button>
                <button className="border-2 border-solid rounded-[10px] w-[80px]">Chưa đọc</button>
            </div>
            <div className="flex justify-between w-[90%] m-auto mt-[20px] mb-[4px]">
                <div>
                    <h2 className="text-[18px] font-normal">Trước đó</h2>
                </div>
                <div>
                    <p className="text-[#216FDB]">Xem tất cả</p>
                </div>
            </div>
            <div className="flex w-[90%] m-auto">
                <div className="w-[20%]">
                    <svg aria-hidden="true" className="x3ajldb height: 56px width: 56px" data-visualcompletion="ignore-dynamic" role="none"><mask id=":rur:"><circle cx="28" cy="28" fill="white" r="28"></circle><circle cx="48" cy="48" data-visualcompletion="ignore" fill="black" r="9"></circle></mask><g mask="url(#:rur:)"><image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" href="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/339088728_602705971719858_3670865651237785257_n.jpg?stp=dst-jpg_p200x200&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=0aeec2&amp;_nc_ohc=HaBVMGwaC4EAX9DxYHR&amp;_nc_ht=scontent.fhan2-3.fna&amp;oh=00_AfAl5-0K3iWKVpWqXlp_JXeQjxhuB3Ey1Cf4pF_Q_ZyKRA&amp;oe=64EF147A" className="height: 56px; width: 56px;"></image><circle className="xbh8q5q x1pwv2dq xvlca1e" cx="28" cy="28" r="28"></circle></g></svg>
                </div>
                <div>
                    <p>
                        Bạn xuất hiện nổi bật trong danh sách tương tác công khai tuần này đấy. Hãy xem bạn đã tương tác nhiều nhất với ai nhé.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Notification