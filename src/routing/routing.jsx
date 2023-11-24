import { createBrowserRouter } from "react-router-dom"
import CategorisPage from "../pages/CategorisPage/CategorisPage"
import HomePage from "../pages/HomePage/HomePage"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>,
    },
    {
        path: '/categories',
        element: <CategorisPage></CategorisPage>
    },
    {
        path: '/product/:id',
        element: <ProductDetailsPage></ProductDetailsPage>
    },
])


export default router