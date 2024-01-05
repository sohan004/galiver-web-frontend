import { useState } from 'react';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {


  // root component
  const [showLeftSideBar, setShowLeftSideBar] = useState(true)
  const [showLeftSideBar2, setShowLeftSideBar2] = useState(false)
  

  return (
    <>
      <div className={` bg-[#f8f8f8] text-black `}>
        <Nav
          showLeftSideBar={showLeftSideBar}
          setShowLeftSideBar={setShowLeftSideBar}
          setShowLeftSideBar2={setShowLeftSideBar2}
          showLeftSideBar2={showLeftSideBar2}
        ></Nav>

        <div className='w-full flex items-start gap-7'>


          {/* left sidebar start */}
          <div className={`fixed top-0 md:hidden left-0 h-screen overflow-y-auto w-[250px] z-[51] duration-500 ${showLeftSideBar2 ? 'translate-x-0' : 'translate-x-[-250px]'}`}>
            {/* sidebar on small screen */}
            <LeftSidebar></LeftSidebar>
          </div>
          <div onClick={() => setShowLeftSideBar2(false)} className={`fixed top-0 block md:hidden left-0 w-full h-full bg-black opacity-50 z-[50] ${showLeftSideBar2 ? 'block' : 'hidden'}`}></div>

          <div className={`h-screen hidden md:block sticky top-0  duration-700 w-[250px]  overflow-hidden ${showLeftSideBar ? 'md:ml-0 ml-[-278px]' : 'ml-[-278px]'}`}>
            {/*  sidebar on medium screen */}
            <LeftSidebar></LeftSidebar>
          </div>
          {/* left sidebar end */}

          {/* main page */}
          <div className='duration-500  flex-1 max-w-[1140px] mx-auto relative '>
            <Outlet></Outlet>
          </div>

        </div>

      </div>
    </>
  );
};

export default App;