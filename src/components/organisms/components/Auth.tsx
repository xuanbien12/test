import { Dropdown } from "antd";
import React from "react";
import user from "./../../../assets/icon/user.svg"
import logout from "./../../../assets/icon/logout.svg"
import changePassword from "./../../../assets/icon/changePassword.svg"
import logoutHover from "./../../../assets/icon/logoutHover.svg"
import changePasswordHover from "./../../../assets/icon/changePasswordHover.svg"
import { setRole } from "../../../redux/slice/reduxGlobal";
const Auth = () => {
    const items = [

        {
            key: '11',
            label: (
                <div className=" change_password flex gap-2 text-[20px] hover:text-[#72BB0D]  py-1 ">
                    <img className="change_password-icon" src={changePassword} alt="" />
                    <img className="change_password-icon-hover" src={changePasswordHover} alt="" />
                    <span>Đổi mật khẩu</span>
                </div>
            ),
        },
        {
            key: '10',
            label: (
                <div onClick={() => {
                    localStorage.clear()
                    window.location.reload()
                }} className=" logout flex gap-2 text-[20px] hover:text-[#72BB0D] py-1 ">
                    <img className="logout-icon" src={logout} alt="" />
                    <img className="logout-icon-hover" src={logoutHover} alt="" />
                    <span>Đăng xuất</span>
                </div>
            ),
        },
    ]
    return (
        <Dropdown
            trigger={['click']}
            menu={{ items }}
            placement="bottomLeft"
            overlayClassName="auth-menu"
        >
            <div className="flex items-center gap-2 h-full">
                <span>
                    Admin
                </span>
                <img src={user} alt="" />
            </div>
        </Dropdown>
    )
}
export default Auth