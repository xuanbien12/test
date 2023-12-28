import React, { lazy } from 'react'
const cardRegistration = React.lazy(() => import('../components/organisms/pages/Home'))
const giahanthexe = React.lazy(() => import('../components/organisms/pages/gia_han_the_xe'))
export const routePortals = {
    HOME: '/',
    GIA_HAN_THE_XE: "/gia-han-the-xe"



}
export const routePortal = [
    {
        id: 1,
        route: routePortals.HOME,
        component: cardRegistration,
    },
    {
        id: 1,
        route: routePortals.GIA_HAN_THE_XE,
        component: giahanthexe,
    }
]