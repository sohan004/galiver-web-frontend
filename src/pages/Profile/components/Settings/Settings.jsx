
const Settings = () => {
    return (
        <div>
            <p className="text-sm font-medium mb-2 ">Email</p>
            <div className="relative">
                <input defaultValue={'sohan@gmail.com'} type="text" name="" className="w-full py-3 px-4 border-2 border-orange-200 rounded-lg bg-transparent" />
                <p className="absolute top-4 right-3 text-orange-600 font-bold text-sm ">Verify</p>
            </div>
            <p className="text-sm font-medium mb-2 mt-6">Password</p>
            <div className="relative">
                <input defaultValue={'* * * * * *'} disabled type="text" name="" className="w-full py-3 px-4 border-2 border-orange-200 bg-transparent rounded-lg" />
                <div className="flex justify-end">
                <p className="text-xs  text-orange-600 cursor-pointer mt-1">Change Password</p>
                </div>
            </div>
            <div className="mt-6 mb-6 pb-6 border-b-2">
                <div className="flex justify-between">
                    <p className="text-sm font-medium">Enable 2-steps verification</p>
                    <input type="checkbox" className="toggle toggle-primary" />
                </div>
                <p className="text-sm opacity-70 mt-2">Make your account extra secure. Along with your password, you’ll need to enter a code that we text to your phone each time you sign in.</p>
            </div>

            <div className="mt-6 mb-6 pb-6 border-b-2 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
                <div>
                    <p className="font-bold">Delete Account</p>
                    <p className=" mt-2 opacity-80 text-sm">Delete your account and all the data</p>
                </div>
                <button className="btn  w-[130px]  hover:bg-red-700 bg-red-600 text-white capitalize border-0">Delete</button>

            </div>
        </div>
    );
};

export default Settings;