import img from '../../assets/logo/png-02.png'

const ProductCardSkleton = () => {
    return (
        <div className='p-2 animate-pulse w-full relative bg-white shadow'>
            <div className='h-36 lg:h-56 w-full overflow-hidden relative'>
                <div className='absolute z-30 bg-gradient-to-r from-orange-100 animate-pulse top-0 left-0 w-full h-full flex justify-center items-center'>
                    <img src={img} className='w-16 md:w-20' alt="" /></div>
            </div>
            <p className='p-1 bg-slate-100 mt-3 rounded-full w-[80%]'></p>
            <p className='p-2 bg-slate-100 mt-2 rounded-full w-[50%]'></p>
            <p className='p-1 bg-slate-100 mt-2 rounded-full w-[60%] mb-4'></p>
        </div>
    );
};

export default ProductCardSkleton;