import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Registration from "pages/Registration/Registration";
import Room from "pages/Room/Room";


export const RouteNames =  {
    LOGIN : '/login',
    REGISTRATION: '/registration',
    HOME: '/',
    ROOM: '/room'
}
export const publicRoutes = [
    {path: RouteNames.LOGIN, exact: true, element: Login},
    {path: RouteNames.REGISTRATION,  element: Registration}
]

export const clientRoutes = [
    {path: RouteNames.HOME, exact: true, element: Home},
    {path: `${RouteNames.ROOM}/:id`, element: Room},
]
export const adminRoutes = [
    {path: RouteNames.HOME, exact: true, element: Home},
    {path: `${RouteNames.ROOM}/:id`, element: Room},
]