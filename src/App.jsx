import Nav from './components/Nav/Nav';
import CartSideBar from './components/CartSideBar/CartSideBar';
import logo from './assets/logo/png-02.png';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const App = () => {

  const { state: cartSideBarState } = useSelector(state => state.cartSideBar);

  // root component

  return (
    <>
      <div className={`${cartSideBarState && 'h-screen overflow-hidden'} text-black bg-[#F5F5F5] py-[3px] `}>
        <Nav></Nav>
        {/* default loader . open command window.spin.showModal() . close command window.spin.close() */}
        <dialog id="spin" className="modal ">
          <div method="dialog" className="modal-box bg-transparent shadow-none relative">
            <img src={logo} className='w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-[#ffffff] animate-pulse shadow-2xl  rounded-full' alt="" />
          </div>
        </dialog>

        <Outlet></Outlet>
        {/* Cart side bar */}
        <CartSideBar />
      </div>
    </>
  );
};

export default App;