import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import CategorisPage from "../pages/CategorisPage/CategorisPage"
import HomePage from "../pages/HomePage/HomePage"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder"
import PaymentMethods from "../pages/PaymentMethods/PaymentMethods"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/categories',
                element: <CategorisPage></CategorisPage>
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
        path: '/payment-method',
        element: <PaymentMethods />
    }



])


export default router
