import { lazy } from 'react'
const Home = lazy(() => import('../components/organisms/home/Home'))
const profile = lazy(() => import('../components/organisms/Profile/Profile'))
const searchResults = lazy(() => import('../components/organisms/searchResults/SearchResults'))
const routePortals = {
    HOME: 'dashboard',
    PROFILE: 'profile',
    SEARCHRESULTS: "searchResultsssss",

}
export const routePortal = [
    {
        id: 1,
        route: routePortals.HOME,
        component: Home,
        permission: 'dashboard'
    },
    {
        id: 2,
        route: routePortals.PROFILE,
        component: profile,
        permission: 'dashboard'
    }
    ,
    {
        id: 3,
        route: routePortals.SEARCHRESULTS,
        component: searchResults,
        permission: 'dashboard'
    }
]