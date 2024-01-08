import { useState } from "react";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import Settings from "./components/Settings/Settings";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Profile = () => {
    const [value, setValue] = useState('p');

    return (
        <div>
            <div className="bg-[#F7F7FD]">

                <div className="bg-white">
                    <div className=" max-w-[1440px] mx-auto px-4 lg:hidden">
                        <div className="flex ">
                            <p onClick={() => setValue('p')} className={`text-sm  ${value === 'p' ? 'font-bold border-b-4 border-orange-600' : ''} py-3 flex-grow text-center`}>Profile</p>
                            <p onClick={() => setValue('s')} className={`text-sm  ${value === 's' ? 'font-bold border-b-4 border-orange-600' : ''} py-3 flex-grow text-center`}>Settings</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="pt-5 flex flex-col lg:flex-row gap-44">
                        <div className="hidden lg:block">
                            <p onClick={() => setValue('p')} className={`py-4 ps-5 pe-20 cursor-pointer border-b-2 ${value === 'p' ? "border-s-4 border-s-orange-600" : ''}`}>Profile</p>
                            <p onClick={() => setValue('s')} className={`py-4 ps-5 pe-20 cursor-pointer border-b-2 ${value === 's' ? "border-s-4 border-s-orange-600" : ''}`}>Settings</p>
                        </div>

                        <div className="flex-grow w-full lg:max-w-[630px]">
                            <div className="flex">
                                <NavLink to='/'  className="mt-2 mb-4 text-sm  flex items-center gap-2  text-orange-600"><FaArrowLeft/> Back to home</NavLink>
                            </div>
                            <div className=" bg-white mb-20 p-6 rounded-lg  border-2 border-orange-100">
                                {value === 'p' && <ProfileDetails />}
                                {value === 's' && <Settings />}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;