
import img from '../../../../assets/SidebarIcon/man.png'

const ProfileDetails = () => {
    return (
        <div>
            <p className="font-medium  mb-4">Profile Picture</p>
            <div className="flex gap-6 items-center mb-6 pb-6 border-b-2">
                <div>
                    <img className="bg-[#E0DEF7]  rounded-full h-20 w-20" alt="" src={img} />
                </div>
                <div className="flex flex-col gap-2 ">
                    <button className="btn btn-sm bg-orange-600 w-[155px] capitalize hover:bg-orange-700 border-0 text-white">Upload</button>
                    <button className="btn btn-sm bg border-orange-600 w-[155px] capitalize bg-transparent text-orange-600 ">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;