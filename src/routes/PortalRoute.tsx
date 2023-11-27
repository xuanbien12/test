import React, { lazy } from 'react'
const DeviceManage = React.lazy(() => import('../components/organisms/pages/DeviceManage'))
const UserManage = React.lazy(() => import('../components/organisms/pages/UserManage'))
const LogDevice = React.lazy(() => import('../components/organisms/pages/LogDevice'))
const SettingDevice = React.lazy(() => import('../components/organisms/pages/SettingDevice'))
export const routePortals = {
    DEVICEMANAGE: '/',
    USERMANAGE: "/user-manage",
    LOGDEVICE: "/log-device",
    SETTINGDEVICE: "/setting-device"


}
export const routePortal = [
    {
        id: 1,
        route: routePortals.DEVICEMANAGE,
        component: DeviceManage,
        permission: 'dashboard'
    },
    {
        id: 2,
        route: routePortals.USERMANAGE,
        component: UserManage,
        permission: 'dashboard'
    },
    {
        id: 3,
        route: routePortals.LOGDEVICE,
        component: LogDevice,
        permission: 'dashboard'
    },
    {
        id: 4,
        route: routePortals.SETTINGDEVICE,
        component: SettingDevice,
        permission: 'dashboard'
    },
]