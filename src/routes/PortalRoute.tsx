import React, { lazy } from 'react'
const HomePage = React.lazy(() => import('../components/organisms/pages/Home'))

export const routePortals = {
    HOME: '/',



}
export const routePortal = [
    {
        id: 1,
        route: routePortals.HOME,
        component: HomePage,
        permission: 'dashboard'
    }
]