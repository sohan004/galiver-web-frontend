
const ColorSelector = () => {
    return (
        <div className=' flex items-center gap-3'>
            <p className='text-lg'>Color</p>
            <ul className='flex items-center gap-2'>
                <p className='p-1 rounded-full border duration-300 hover:border-orange-500'><li className='h-5 w-5 cursor-pointer  bg-red-500 rounded-full'></li></p>
                <p className='p-1 rounded-full border duration-300 hover:border-orange-500'><li className='h-5 w-5 cursor-pointer  bg-teal-600 rounded-full'></li></p>
                <p className='p-1 rounded-full border duration-300 hover:border-orange-500'><li className='h-5 w-5 cursor-pointer  bg-blue-500 rounded-full'></li></p>
                <p className='p-1 rounded-full border duration-300 hover:border-orange-500'><li className='h-5 w-5 cursor-pointer  bg-slate-600 rounded-full'></li></p>
            </ul>
        </div>
    );
};

export default ColorSelector;