import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { Outlet } from "react-router-dom";

const LayoutWithNavSidebar = () => {

    const [showLeftSideBar, setShowLeftSideBar] = useState(true)

    return (
        <>
            <div className={` bg-[#f8f8f8] text-black `}>
                <Nav
                    showLeftSideBar={showLeftSideBar}
                    setShowLeftSideBar={setShowLeftSideBar}
                ></Nav>

                <div className='w-full flex items-start gap-3'>

                    <div onClick={() => setShowLeftSideBar(prev => !prev)} className={`fixed top-0 block md:hidden left-0 w-full h-full bg-black opacity-50 z-[100] backdrop-blur-md ${showLeftSideBar ? 'hidden' : 'block'}`}></div>

                    <div className={`h-screen fixed md:sticky top-0 duration-500 w-[250px]  overflow-hidden  z-[100] md:z-10 ${showLeftSideBar ? 'md:ml-0 -ml-[262px]' : 'ml-[0] md:-ml-[262px]'}`}>
                        <LeftSidebar></LeftSidebar>
                    </div>
                    {/* left sidebar end */}

                    {/* main page */}
                    <div className='duration-500  flex-1 max-w-[1340px] mx-auto relative '>
                        <Outlet></Outlet>
                    </div>

                </div>

            </div>
        </>
    );
};

export default LayoutWithNavSidebar;