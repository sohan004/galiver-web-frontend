import Nav from './components/Nav/Nav';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const App = () => {

  const { state: cartSideBarState } = useSelector(state => state.cartSideBar);

  // root component

  return (
    <>
      <div className={`${cartSideBarState && 'h-screen overflow-hidden'} text-black bg-[#F5F5F5] py-[3px] `}>
        <Nav></Nav>

        <Outlet></Outlet>
       
      </div>
    </>
  );
};

export default App;