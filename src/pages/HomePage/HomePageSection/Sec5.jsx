
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeProduct, setLoading } from '../../../features/HomeProduct/HomeProductSlice';
import img from '../../../assets/logo/png-02.png'
import ProductCardSkleton from '../../../components/ProductCardSkleton/ProductCardSkleton';
import getCartLimit from '../../../utilities/getLimit';
import scrollTop from '../../../Hooks/useScrollTop';


const Sec5 = () => {
    const navigate = useNavigate();
    const { products, loading } = useSelector(state => state.homeProduct)
    const dispatch = useDispatch()
    const [stopLoading, setStopLoading] = useState(true)


    useEffect(() => {
        const loadData = setTimeout(() => {
            if (products.length > 0) return
            const limit = getCartLimit();
            scrollTop()
            fetch(`${BACKEND_URL}/api/v1/product/search?limit=${limit}`)
                .then(res => res.json())
                .then(data => {
                    if (data.length === 0) setStopLoading(false)
                    scrollTop()
                    dispatch(setHomeProduct(data))
                })
        }, 0);
        return () => clearTimeout(loadData)
    }, []);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY + 300) >= document.body.scrollHeight && !loading && stopLoading && products.length >= getCartLimit()) {
            dispatch(setLoading(true))
            const limit = getCartLimit();
            fetch(`${BACKEND_URL}/api/v1/product/search?limit=${limit}&skip=${products.length}`)
                .then(res => res.json())
                .then(data => {
                    if (data.length === 0) setStopLoading(false)
                    dispatch(setHomeProduct([...products, ...data]))
                })
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className='w-full mt-5 lg:mt-8 pb-5'>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className=' font-medium lg:text-2xl '>Just For You</h1>
                    <p className='text-xs lg:text-sm opacity-80'>Recommended For You</p>
                </div>
            </div>
            <div className='mt-1 lg:mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 gap-y-2 md:gap-x-4 md:gap-y-5'>
                {products.map((product, index) => <ProductCard key={index} product={product} />)}
                {loading && new Array(15).fill(0).map((_, i) => <ProductCardSkleton key={i} />)}
            </div>
        </div>
    );
};

export default Sec5;