
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { useEffect } from 'react';
import { BACKEND_URL } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeProduct } from '../../../features/HomeProduct/HomeProductSlice';
import img from '../../../assets/logo/png-02.png'
import ProductCardSkleton from '../../../components/ProductCardSkleton/ProductCardSkleton';


const Sec5 = () => {
    const navigate = useNavigate();
    const { products, loading } = useSelector(state => state.homeProduct)
    const dispatch = useDispatch()

    const getLimit = () => {
        const width = window.innerWidth;
        if (width < 768) {
            return 12
        }
        else if (width < 1024) {
            return 15
        }
        else if (width < 1280) {
            return 12
        }
        else {
            return 15
        }
    }

    useEffect(() => {
        const loadData = setTimeout(() => {
            if (products.length > 0) return
            const limit = getLimit();
            fetch(`${BACKEND_URL}/api/v1/product/search?limit=${limit}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(setHomeProduct(data))
                })
        }, 0);
        return () => clearTimeout(loadData)
    }, []);

    console.log(products)

    return (
        <div className='w-full mt-5 lg:mt-8'>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className=' font-medium lg:text-2xl '>Just For You</h1>
                    <p className='text-xs lg:text-sm opacity-80'>Recommended For You</p>
                </div>
            </div>
            <div className='mt-1 lg:mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 gap-y-2 md:gap-x-4 md:gap-y-5'>
                {!loading ? products.map((product, index) => <ProductCard key={index} product={product} />) :
                new Array(25).fill(0).map((_, i) => <ProductCardSkleton key={i}/>)
                }
            </div>
        </div>
    );
};

export default Sec5;