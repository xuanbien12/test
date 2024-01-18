import React, { useEffect, useState } from "react";
import login from "./../../../assets/icon/login.svg"
import loginHover from "./../../../assets/icon/loginHover.svg"
import menuBlue from "./../../../assets/icon/menuBlue.svg"
import menutrang from "./../../../assets/icon/menutrang.svg"

import x from "./../../../assets/icon/x.svg"
import menuAdmin from "./../../../assets/icon/menuAdmin.svg"
import benphai from "./../../../assets/icon/benphai.svg"
import { Link, useLocation } from "react-router-dom";
import { routePortals } from "../../../routes/PortalRoute";
import { Button, Drawer, Dropdown } from 'antd';
import Login from "./Modal/Login";

import { getCurrentDateTime } from "../../../configs/common";
import { routePortalsAdmin } from "../../../routes/PortalRouteAdmin";
import Auth from "./Auth";
import Time from "./Time";
import { role } from "../../../configs/localStorage";
import { useSelector } from "react-redux";

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
    const items = [
        {
            key: '1',
            label: (
                <div className=" text-[32px] mb-2 text-center ">
                    Parking Management
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <Link className="flex gap-2 text-[20px] mb-3 " to={routePortalsAdmin.QUAN_LY_THE_XE}>
                    <img src={menuAdmin} alt="" /> Quản lý thẻ xe
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link className="flex gap-2 text-[20px] mb-3  " to={routePortalsAdmin.QUAN_LY_NGUOI_DUNG}>
                    <img src={menuAdmin} alt="" /> Quản lý người dùng
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link className="flex gap-2 text-[20px] mb-3  " to={routePortalsAdmin.DANG_KY_GIA_HAN}>
                    <img src={menuAdmin} alt="" /> Đăng ký-Gia hạn vé
                </Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link className="flex gap-2 text-[20px] mb-3  " to={routePortalsAdmin.QUAN_LY_THANH_TOAN}>
                    <img src={menuAdmin} alt="" /> Quản lý thanh toán
                </Link>
            ),
        },
        {
            key: '6',
            label: (
                <Link className="flex gap-2 text-[20px] mb-3  " to={routePortalsAdmin.THONG_KE_DOANH_THU}>
                    <img src={menuAdmin} alt="" />Thống kê doanh thu
                </Link>
            ),
        },
        {
            key: '7',
            label: (
                <Link className="flex gap-2 text-[20px]  mb-3 " to={routePortalsAdmin.CAU_HINH_THANH_TOAN}>
                    <img src={menuAdmin} alt="" />Cấu hình thanh toán
                </Link>
            ),
        }
    ];
    return (
        <header className=" ">

            {
                +role === 2
                    ?
                    <div className="bg-[#0D72BB]">
                        <div className="container">
                            <div className="flex justify-between items-center  h-[40px] text-[20px] text-[#fff] ">



                                <Dropdown
                                    trigger={['click']}
                                    menu={{ items }}
                                    placement="bottomLeft"
                                    overlayClassName="custom-menu"
                                >
                                    <div className="flex items-center gap-2 h-full cursor-pointer">
                                        <img src={menutrang} alt="" />
                                        <span> Trang chủ</span>
                                    </div>
                                </Dropdown>

                                <div className="flex gap-4 items-center  h-full ">
                                    <span>
                                        {
                                            getCurrentDateTime("day")
                                        }
                                    </span>
                                    <span>
                                        <Time />
                                    </span>
                                </div>
                                <Auth />

                            </div>
                        </div>
                    </div>
                    :
                    <div className="bg-[#fff] lg:bg-[#0D72BB]">
                        <div className="container">
                            <div className="flex h-[40px] px-10  ">
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
                    </div>
            }


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
        </header>
    )
}
export default Header