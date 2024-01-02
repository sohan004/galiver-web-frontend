import GlobalLoading from "./components/GlobalLoading/GlobalLoading";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const Modal = () => {
    return (
        <>
            <GlobalLoading />
            <SignIn></SignIn>
            <SignUp></SignUp>
        </>
    );
};

export default Modal;