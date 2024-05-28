import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routing/useRouting";
import CartSideBar from "./components/CartSideBar/CartSideBar";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";
import useSocketConnect from "./Hooks/useSockeConnect";
import { Toaster } from "react-hot-toast";

export const BACKEND_URL = import.meta.env.MODE === 'development' ? 'http://localhost:3013' : 'https://galiver-backend.onrender.com'

const App = () => {
    const route = router()
    const browserRouter = createBrowserRouter(route)
    const user = useSelector(state => state.auth.user)

    // socket connection
    useSocketConnect(user)

    return (
        <>
            <div className=' text-black bg-[#f8f8f8] '>
                <RouterProvider router={browserRouter} />

                {/* all sidebar */}
                <CartSideBar />

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