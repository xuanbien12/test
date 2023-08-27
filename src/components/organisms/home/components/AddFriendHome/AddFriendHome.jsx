
import React from "react";
import Button from "../../../../Button/Button";


const AddFriendHome = () => {
    const handleAcceptFriend = () => {
        console.log("C")
    }
    const handleNoAcceptFriend = () => {

    }
    return (
        <div className="flex items-center  hover:rounded-[10px] hover:bg-[#e4e6e8] py-3  px-2">
            <img className=" rounded-[50%] w-[47px] h-[47px] " src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/369682966_122101770050018735_2655661845417318471_n.jpg?stp=cp6_dst-jpg_p60x60&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=tsBggQyASsUAX9_oanV&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDyP7pTHL3E1C5b-oCYsthL7pN07BxQwJ8wtnQwGfnZuw&oe=64F0B5D8" alt="" />
            <div className="ml-[10px] font-[semibold] ">
                <h4 className=" font-[Semibold] " >Thanh thảo</h4>
                <Button onClick={handleAcceptFriend} className=" rounded-md mr-[10px] bg-[#1b74e4] text-[#fff] h-9 min-w-[129px]   ">Xác Nhận</Button>
                <Button onClick={handleNoAcceptFriend} className="rounded-md  bg-[#D8DADF]  h-9 min-w-[129px]">Xóa</Button>

            </div>
        </div>
    )
}
export default AddFriendHome