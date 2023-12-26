import Nav from './components/Nav/Nav';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const App = () => {

  const { state: cartSideBarState } = useSelector(state => state.cartSideBar);

  // root component

  return (
    <>
      <div className={`${cartSideBarState && 'h-screen overflow-hidden'} bg-[#f8f8f8] text-black `}>
        <Nav></Nav>

        <Outlet></Outlet>
       
      </div>
    </>
  );
};

export default App;