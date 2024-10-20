import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import router from "./routing/useRouting";
import CartSideBar from "./components/CartSideBar/CartSideBar";
import Modal from "./components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import useSocketConnect from "./Hooks/useSockeConnect";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { getCart } from "./utilities/cart";
import { pushToDataLayer } from "./main";

// export const BACKEND_URL = import.meta.env.MODE === 'development' ? 'http://localhost:3013' : 'https://galiver-backend.onrender.com'
export const BACKEND_URL = import.meta.env.MODE === 'development' ? 'https://api.galiver.shop' : 'https://api.galiver.shop'

const App = () => {
    const route = router()
    const browserRouter = createBrowserRouter(route)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    useEffect(() => {-
        getCart(dispatch)
    }, [])

    

    // socket connection
    useSocketConnect(user)

    return (
        <>
            <div className=' text-black bg-[#f8f8f8] '>
                <RouterProvider router={browserRouter} >


                </RouterProvider>

                {/* all sidebar */}

                {/* all global modal */}
                <Modal />

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </>
    );
};

export default App;
