import logo from '../../../../assets/logo/png-02.png'


// eslint-disable-next-line react-refresh/only-export-components
export const toggleGlobalLoading = (e) => {
    e === 'open'
        ? window.spin.showModal()
        : window.spin.close()
}


const GlobalLoading = () => {
    return (
        <>
            {/* default loader . open command window.spin.showModal() . close command window.spin.close() */}
            <dialog id="spin" className="modal ">
                <div method="dialog" className="modal-box bg-transparent shadow-none relative">
                    <img src={logo} className='w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-[#ffffff] animate-pulse shadow-2xl  rounded-full' alt="" />
                </div>
            </dialog>
        </>
    );
};

export default GlobalLoading;