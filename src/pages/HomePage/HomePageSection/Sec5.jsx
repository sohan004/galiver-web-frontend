
import ProductCard from '../../../components/ProductCard/ProductCard';


const Sec5 = () => {
    return (
        <div className='max-w-[1188px] mx-auto px-3 mt-5 lg:mt-8'>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className=' font-medium lg:text-2xl '>Just For You</h1>
                    <p className='text-xs lg:text-sm opacity-80'>Recommended For You</p>
                </div>

            </div>
            <div className='mt-1 lg:mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-2 lg:gap-x-4 lg:gap-y-5'>
                {new Array(8).fill(0).map((i) => <ProductCard key={i +1} />)}
            </div>
        </div>
    );
};

export default Sec5;