import { createBrowserRouter } from "react-router-dom"
import LayoutWithNav from "../LayoutWithNav"
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage"
import HomePage from "../pages/HomePage/HomePage"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder"
import OrderInvoice from "../pages/OrderInvoice/OrderInvoice"

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutWithNav></LayoutWithNav>,
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
])


export default router
