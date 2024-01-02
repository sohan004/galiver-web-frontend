import { IoIosClose } from "react-icons/io";
import googleLogo from '../../../../assets/logo/icons8-google-96.svg'


// eslint-disable-next-line react-refresh/only-export-components
export const toggleSignIn = (e) => {
    if (e === 'open') {
        window.signIn.showModal()
        window.signUp.close()
    }
    else {
        window.signIn.close()
    }
}

const SignIn = () => {
    return (
        <>
            <dialog id="signIn" className="modal ">
                <div method="dialog" className="modal-box p-0 bg-transparent shadow-none">
                    <div className="flex-1 ">
                        <div className="max-w-[420px] rounded-lg bg-white  mx-auto relative">
                        <IoIosClose 
                        onClick={()=>toggleSignIn()}
                        className="absolute right-2 top-2 cursor-pointer select-none active:scale-75 text-4xl" />
                            <div className="relative h-auto">
                                <div className="absolute bottom-5 right-2">
                                    <a href="#" className="block transition hover:rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="px-10 pt-4 pb-8 rounded-3xl shadow-xl">
                                <div className="mx-auto text-center">
                                    <h1 className="text-3xl text-gray-800">Sign in</h1>
                                    <p className="mt-4">How do you want to sign in ?</p>
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
                                        <input id="email" name="email" type="text" className="peer w-full px-0.5 border-0 border-b-2 
                                                    py-2
                                                    focus:outline-none
                                                    border-gray-300 placeholder-transparent 
                                                    focus:ring-0
                                                    bg-white
                                                    focus:border-orange-600" placeholder="willPig@tailwind.com" />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-600 peer-focus:text-sm">Email</label>
                                    </div>
                                    <div className="mt-10 relative">
                                        <input id="password" type="password" name="password" className="peer w-full px-0.5 border-0 
py-2
focus:outline-none
bg-white
                                                    border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-orange-600" placeholder="Password" />
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-600 peer-focus:text-sm">Password</label>
                                    </div>
                                    {/* <div className="mt-5 md:mt-10">
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200/50" />
                                            <span className="ml-2 text-sm">Check here that you have agree to <a href="#" className="font-semibold text-orange-600 hover:underline">the terms.</a></span>
                                        </label>
                                    </div> */}
                                    <button type="button" className="w-full mt-10 md:mt-14 py-2 md:py-4 text-lg text-white font-semibold text-center rounded-full bg-orange-600 transition-all hover:bg-orange-700 focus:outline-none">Sign In</button>
                                    <p className="text-center text-sm text-gray-400 mt-4">Have an account ? <a href="#" className="font-semibold text-orange-600 hover:underline">Sign In</a></p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </dialog>
        </>
    );
};

export default SignIn;