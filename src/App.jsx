import { RouterProvider } from "react-router-dom";
import router from "./routing/routing";
import CartSideBar from "./components/CartSideBar/CartSideBar";
import Modal from "./components/Modal/Modal";

const App = () => {
    return (
        <>
            <div className=' text-black bg-[#f8f8f8] '>
                <RouterProvider router={router} />

                {/* all sidebar */}
                <CartSideBar />

                {/* all global modal */}
                <Modal />
            </div>
        </>
    );
};

export default App;