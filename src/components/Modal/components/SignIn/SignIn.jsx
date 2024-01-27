import { IoIosClose } from "react-icons/io";
import googleLogo from '../../../../assets/logo/icons8-google-96.svg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import toggleModal from "../../toggleModal";
import { toggleSignUp } from "../SignUp/SignUp";


// eslint-disable-next-line react-refresh/only-export-components
export const toggleSignIn = (e) => {
    toggleModal('signIn-parent', 'sign-in', e)
}

const openSignUp = () => {
    toggleSignIn('close')
    toggleSignUp('open')

}

const SignIn = () => {
    const [showPass, setShowPass] = useState(false)
    return (
        <>
            <div id="signIn-parent" className="fixed hidden top-0 left-0 w-full h-full overflow-hidden backdrop-blur-sm bg-[#000000a1] z-[9999]"></div>

            <div id='sign-in' className="select-none max-w-[520px] fixed  p-4 top-2/4 invisible scale-90 opacity-0 left-2/4 -translate-x-2/4 duration-300  w-full -translate-y-2/4 z-[99999]">
                
                <div className="rounded-lg bg-white relative">
                    <IoIosClose
                        onClick={() => toggleSignIn()}
                        className="absolute right-2 top-2 cursor-pointer select-none active:scale-75 text-4xl" />
                    <div className="relative h-auto">

                    </div>
                    <div className="px-7 pt-4 pb-8 rounded-3xl shadow-xl">
                        <div className="mx-auto text-center">
                            <h1 className="text-2xl  md:text-2xl text-gray-800">Sign in</h1>
                            <p className="mt-2">How do you want to sign in ?</p>
                        </div>
                        <div className="flex items-center justify-around mt-5 ">
                            <div>
                                <button className="btn bg-white shadow-md border-gray-100">
                                    <img
                                        className="h-6 w-6 \"
                                        src={googleLogo} alt="" />
                                    Google</button>
                            </div>
                        </div>
                        <div className="flex items-center my-6">
                            <hr className="flex-1" />
                            <span className="px-4 text-sm text-gray-400">Or countinue with</span>
                            <hr className="flex-1" />
                        </div>
                        <form action="" method="POST">
                            <div className="relative">
                                <input
                                    name="email"
                                    type="text"
                                    className="peer w-full px-0.5 border-0 border-b-2 
                                                    py-2
                                                    focus:outline-none
                                                    border-gray-300 placeholder-transparent 
                                                    focus:ring-0
                                                    bg-white
                                                    focus:border-orange-600" placeholder="willPig@tailwind.com" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-600 peer-focus:text-sm">Email</label>
                            </div>
                            <div className="mt-5 relative">
                                {showPass ?
                                    <FaEye
                                        onClick={() => setShowPass(false)}
                                        className="absolute cursor-pointer right-2 bottom-3" /> :
                                    <FaEyeSlash
                                        onClick={() => setShowPass(true)}
                                        className="absolute cursor-pointer right-2 bottom-3" />
                                }
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    className="peer w-full px-0.5 border-0 py-2 focus:outline-none bg-white
                                                    border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-orange-600" placeholder="Password" />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-600 peer-focus:text-sm">Password</label>
                            </div>
                            {/* <div className="mt-5 md:mt-10">
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200/50" />
                                            <span className="ml-2 text-sm">Check here that you have agree to <a href="#" className="font-semibold text-orange-600 hover:underline">the terms.</a></span>
                                        </label>
                                    </div> */}
                            <button type="button" className="w-full mt-5 md:mt-7 py-2 md:py-3 text-lg text-white font-semibold text-center rounded-full bg-orange-600 transition-all hover:bg-orange-700 focus:outline-none">Sign In</button>
                            <p className="text-center text-sm text-gray-400 mt-4">You have no account ? <span 
                            onClick={openSignUp}
                            className="font-semibold text-orange-600 hover:underline cursor-pointer">Sign Up</span></p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignIn;