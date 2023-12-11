import Nav from './components/Nav/Nav';
import CartSideBar from './components/CartSideBar/CartSideBar';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Modal from './components/Modal/Modal';

const App = () => {

  const { state: cartSideBarState } = useSelector(state => state.cartSideBar);

  // root component

  return (
    <>
      <div className={`${cartSideBarState && 'h-screen overflow-hidden'} text-black bg-[#F5F5F5] py-[3px] `}>
        <Nav></Nav>


        <Outlet></Outlet>


        <Modal />

        {/* Cart side bar */}
        <CartSideBar />
      </div>
    </>
  );
};

export default App;