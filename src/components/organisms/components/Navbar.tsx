import React from "react";
import userManage from "./../../../assets/icon/UserManage.svg"
import DeviceManage from "./../../../assets/icon/DeviceManage.svg"
import LogDevice from "./../../../assets/icon/LogDevice.svg"
import setting from "./../../../assets/icon/Setting.svg"
import { Link } from "react-router-dom";
import { routePortals } from "../../../routes/PortalRoute";
const mainMenuData = [
    {
        id: "device manage",
        name: "Device Manage",
        icon: DeviceManage,
        link: {
            path: routePortals.DEVICEMANAGE,
        },
    },
    {
        id: "user",
        name: "User Manage",
        icon: userManage,
        link: {
            path: routePortals.USERMANAGE
        },
    },
    {
        id: "log",
        name: "Log Device",
        icon: LogDevice,
        link: {
            path: routePortals.LOGDEVICE
        },
    },
    {
        id: "setting",
        name: "Setting Device",
        icon: setting,
        link: {
            path: routePortals.SETTINGDEVICE
        },
    },
];

const Navbar = () => {
    return (
        <div style={{
            background: "linear-gradient(91deg, rgba(41, 26, 221, 0.29) 0.49%, rgba(31, 67, 117, 0.13) 98.47%)"
        }}
            className="min-h-[80vh] min-w-[250px] w-full rounded-[12px] px-[19px] pt-[34px] "
        >

            <ul className="flex flex-col gap-[31px] ">
                {
                    mainMenuData.map((item: any) => (
                        <li key={item.id}>
                            <Link className="flex px-[15px] py-[6px] bg-white items-center rounded-[10px] gap-[14px] " to={item.link.path}>
                                <img src={item.icon} alt="" />
                                <span className="font-medium">{item.name} </span>
                            </Link>

                        </li>
                    ))
                }

            </ul>


        </div>
    )
}
export default Navbar