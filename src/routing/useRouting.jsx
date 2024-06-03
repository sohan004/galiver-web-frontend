/* eslint-disable react-hooks/rules-of-hooks */
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage"
import HomePage from "../pages/HomePage/HomePage"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder"
import OrderInvoice from "../pages/OrderInvoice/OrderInvoice"
import LayoutWithNavSidebar from "../Layout/LayoutWithNavSidebar/LayoutWithNavSidebar"
import Profile from "../pages/Profile/Profile"
import MyOrder from "../pages/MyOrder/MyOrder"
import SearchPage from "../pages/SearchPage/SearchPage"
import LandingPage from "../pages/LandingPage/LandingPage"

const router = () => {

    return [
        {
            path: '/',
            element: <LayoutWithNavSidebar></LayoutWithNavSidebar>,
            children: [
                {
                    path: '/',
                    element: <HomePage></HomePage>
                },
                {
                    path: '/categories',
                    element: <CategoriesPage></CategoriesPage>
                },
                {
                    path: '/product/:id',
                    element: <ProductDetailsPage></ProductDetailsPage>
                },
                {
                    path: '/search',
                    element: <SearchPage></SearchPage>
                },
            ]
        },
        {
            path: '/place-order',
            element: <PlaceOrder></PlaceOrder>
        },
        {
            path: '/invoice',
            element: <OrderInvoice></OrderInvoice>
        },
        {
            path: '/profile',
            element: <Profile></Profile>
        },
        {
            path: '/my-order',
            element: <MyOrder></MyOrder>
        },
        {
            path: '/landing-page',
            element: <LandingPage></LandingPage>
        },
    ]
}


export default router
