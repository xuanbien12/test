import React, { useEffect, useState } from "react";
import Logo from "./logo";
import { logout, profile } from "../../../apis/apis";
import { phoneNumber, token } from "../../../configs/localStorage";
import notification from "./../../../assets/icon/notification.svg"
import nhietke from "./../../../assets/icon/Nhietke.svg"
import menu from "./../../../assets/icon/menu.svg"
import { Popover } from "antd";
import { Notification } from "../../../configs/notification";
import { useNavigate } from "react-router-dom";
import ModalChangePassword from "./Modal/ModalChangePassword";
const Header = () => {
    const [ProfileUser, setProfileUser] = useState<any>()
    const [openPopover, setOpenPopover] = useState(false);
    const [openPopoverNotification, setOpenPopoverNotification] = useState(false);
    const [openModalChangePassword, setOpenModalChangePassword] = useState(false)

    useEffect(() => {
        const formData = new FormData();

        formData.append("phonenb", `${phoneNumber}`);
        formData.append("token", `${token}`);

        if (token) {
            profile(formData)
                .then((res) => {

                    setProfileUser(res?.data?.message)

                }).catch((e) => {
                    console.log(e)
                })

        }
    }, [])
    const handleOpenChange = (newOpen: boolean) => {
        setOpenPopover(newOpen);
    }
    const handleOpenChangeNotification = (newOpen: boolean) => {
        setOpenPopoverNotification(newOpen)
    }
    const Navigate = useNavigate()
    const handleLogout = () => {
        const formData = new FormData();
        formData.append("phonenb", `${phoneNumber}`);
        formData.append("token", `${token}`);
        logout(formData)
            .then((res) => {
                console.log("res", res)
                Notification("success", res?.data.message)
                setTimeout(() => {
                    localStorage.clear()
                    Navigate("/login")
                }, 2000);
            })
        handleOpenChange(false)
    }

    const content = (
        <div className="flex flex-col  items-end p-3">
            <button onClick={() => {
                handleOpenChange(false)
                setOpenModalChangePassword(true)
            }

            } className="border-b-2 pb-3  border-[rgba(128,128,128,0.50)]">Change Password</button>
            <button className="pt-3" onClick={handleLogout}>Log Out</button>
        </div >

    )
    const contentNotification = (
        <ul className="border border-[#74B95C] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] ">
            <li className="flex gap-2 bg-[#E5ECF6] p-3 items-center ">
                <img className=" w-[50px] h-[50px]" src={nhietke} alt="" />
                <div>
                    <div className="flex justify-between text-[#757575] ">
                        <span>17/11/2023</span>
                        <span>15:29</span>
                    </div>
                    <div>
                        Pin của xe số <span className="text-[#3772D4] ">123456789012</span>, ĐT <span className="text-[#3772D4] ">0123456789</span> vượt quá 60*C.
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#349E49" />
                </svg>
            </li>
        </ul>
    )
    return (
        <div className="min-h-[70px]  p-[16px] flex justify-between items-center ">
            <div>
                <Logo />
            </div>
            <div className="flex items-center gap-4 mr-10">
                <h4 className=" text-[24px] font-normal ">{ProfileUser?.fullname}</h4>
                <div className="relative ">
                    <Popover
                        open={openPopoverNotification}
                        onOpenChange={handleOpenChangeNotification}
                        content={contentNotification} trigger="click"
                        placement="bottomRight"

                    >
                        <img src={notification} alt="" />
                        <div className="absolute w-[20px] rounded-[7px] bg-[rgba(52,100,172,0.80)] text-[#fff] top-[-10px] left-5 h-[15px] flex justify-center items-center ">4</div>
                    </Popover>
                </div>
                <Popover open={openPopover}
                    onOpenChange={handleOpenChange}
                    content={content} trigger="click"
                    placement="bottomRight">
                    <img className="cursor-pointer" src={menu} alt="" />
                </Popover>

                <ModalChangePassword openModalChangePassword={openModalChangePassword} setOpenModalChangePassword={setOpenModalChangePassword} />
            </div>

        </div>
    )
}
export default Header