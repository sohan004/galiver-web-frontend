
const SizeSelector = () => {
    return (
        <div className=' flex items-center gap-5 pt-4'>
            <p className='text-lg'>Size</p>
            <ul className='flex items-center gap-2'>
                <p className="h-8 cursor-pointer hover:border-orange-500 duration-300 text-xs md:text-sm w-8  flex items-center justify-center rounded-full border">S</p>
                <p className="h-8 cursor-pointer hover:border-orange-500 duration-300 text-xs md:text-sm w-8  flex items-center justify-center rounded-full border">M</p>
                <p className="h-8 cursor-pointer hover:border-orange-500 duration-300 text-xs md:text-sm w-8  flex items-center justify-center rounded-full border">L</p>
                <p className="h-8 cursor-pointer hover:border-orange-500 duration-300 text-xs md:text-sm w-8  flex items-center justify-center rounded-full border">XL</p>
                <p className="h-8 cursor-pointer hover:border-orange-500 duration-300 text-xs md:text-sm w-8  flex items-center justify-center rounded-full border">2XL</p>
                <p className="h-8 cursor-pointer hover:border-orange-500 duration-300 text-xs md:text-sm w-8  flex items-center justify-center rounded-full border">3XL</p>
            </ul>
        </div>
    );
};

export default SizeSelector;