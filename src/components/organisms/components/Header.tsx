import React, { useEffect, useState } from "react";
import login from "./../../../assets/icon/login.svg"
import loginHover from "./../../../assets/icon/loginHover.svg"
import menuBlue from "./../../../assets/icon/menuBlue.svg"
import x from "./../../../assets/icon/x.svg"
import benphai from "./../../../assets/icon/benphai.svg"
import { Link, useLocation } from "react-router-dom";
import { routePortals } from "../../../routes/PortalRoute";
import { Button, Drawer } from 'antd';
import Login from "./Modal/Login";
const Header = () => {
    const [openModalLogin, setOpenModalLogin] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false);

    const showDrawer = () => {
        setOpenDrawer(true);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };
    const location = useLocation()


    return (
        <div className="bg-[#fff] lg:bg-[#0D72BB]  ">

            <div className="container">
                <div className="flex h-[40px] px-10 ">
                    <div className="w-[90%] lg:w-[80%] flex justify-center">
                        <ul className="flex ">
                            <li className={` ${location.pathname === routePortals.GIA_HAN_THE_XE ? "text-[#72BB0D] " : "text-[#fff] max-lg:hidden "} hover:bg-[#fff] hover:text-[#72BB0D]  `}>
                                <Link className="text-[20px] py-[5px] inline-block px-8" to={routePortals.GIA_HAN_THE_XE}>Gia hạn thẻ xe</Link>
                            </li>
                            <li className={` ${location.pathname === routePortals.HOME ? "text-[#72BB0D] " : "text-[#fff] max-lg:hidden"} hover:bg-[#fff] hover:text-[#72BB0D] `}>
                                <Link className="text-[20px] py-[5px] inline-block px-8" to={routePortals.HOME}> Đăng ký thẻ xe</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" w-[10%] lg:w-[20%] flex justify-end ">
                        <div onClick={() => setOpenModalLogin(true)} className="hidden btn-login cursor-pointer hover:text-[#72BB0D] lg:flex h-full text-[20px] text-[#fff]  gap-1 items-center">
                            <img className="login" src={login} alt="" />
                            <img className="login-hover" src={loginHover} alt="" />
                            Đăng nhập
                        </div>
                        <div onClick={showDrawer} className=" flex items-center h-full lg:hidden">
                            <img src={menuBlue} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <Drawer
                width={480}
                title={<div className="flex justify-end" ><div className="cursor-pointer"><img onClick={onClose} src={x} alt="" /></div></div>}
                placement="left"
                closable={false}
                onClose={onClose}
                open={openDrawer}
                getContainer={false}
            >
                <ul>
                    <li className=" ">
                        <Link onClick={onClose} to={routePortals.GIA_HAN_THE_XE} className="text-[20px] text-[#4D4D4D] flex py-3 px-1 justify-between items-center">Gia hạn thẻ xe <img src={benphai} alt="" /></Link>
                    </li>
                    <li className=" ">
                        <Link onClick={onClose} to={routePortals.HOME} className="text-[20px] text-[#4D4D4D] flex py-3 px-1 justify-between items-center">Đăng ký thẻ xe <img src={benphai} alt="" /></Link>
                    </li>
                </ul>
            </Drawer>
            <Login openModalLogin={openModalLogin} setOpenModalLogin={setOpenModalLogin} />
        </div>
    )
}
export default Header