import AdminPage from './pages/AdminPage'
import AuthPage from './pages/AuthPage'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { ADMIN_ROUTE, REGISTER_ROUTE, CART_ROUTE, LOGIN_ROUTE, HOME_ROUTE, PRODUCT_ROUTE } from './utils/constants'

export const authRoutes = [
    {
        path: CART_ROUTE,
        page: CartPage
    },
    {
        path: ADMIN_ROUTE,
        page: AdminPage
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        page: HomePage
    },
    {
        path: PRODUCT_ROUTE + "/:id",
        page: ProductPage   
    },
    {
        path: LOGIN_ROUTE,
        page: AuthPage   
    },
    {
        path: REGISTER_ROUTE,
        page: AuthPage   
    },
]