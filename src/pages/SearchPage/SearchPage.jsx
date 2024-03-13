import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setProducts } from "../../features/searchProduct/searchProductSlice";
import getCartLimit from "../../utilities/getLimit";
import { BACKEND_URL } from "../../App";
import ProductCardSkleton from "../../components/ProductCardSkleton/ProductCardSkleton";
import ProductCard from "../../components/ProductCard/ProductCard";
import noProduct from '../../assets/productImg/no-product-8316266-6632286.webp'

const SearchPage = () => {
    const location = useLocation();
    const { products, loading } = useSelector((state) => state.searchProduct);
    const dispatch = useDispatch();
    const [stopLoading, setStopLoading] = useState(true);

    const getQuery = (location) => {
        let search = location.search.substring(1);
        const limit = getCartLimit()
        search += `${search ? "&" : ""}limit=${limit}&skip=${products.length}`;
        return search;
    };

    const getInputSearchText = () => {
        const search = location.search;
        const searchText = new URLSearchParams(search).get("search");
        return searchText || "";
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (products.length === 0 ) {
                dispatch(setLoading(true));
                 setStopLoading(true)
                 window.scrollTo(0, 0);
                const searchQuery = getQuery(location);
                fetch(`${BACKEND_URL}/api/v1/product/search?${searchQuery}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        dispatch(setProducts(data));
                    })
                    .catch(() => setLoading(false))
            }
        }, 0);

        return () => clearTimeout(timeOut);
    }, [location]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY + 300) >= document.body.scrollHeight && !loading && stopLoading && products.length >= getCartLimit()) {
                dispatch(setLoading(true));
                const searchQuery = getQuery(location);
                fetch(`${BACKEND_URL}/api/v1/product/search?${searchQuery}`)
                    .then(res => res.json())
                    .then(data => {
                        if(data.length === 0) setStopLoading(false)
                        dispatch(setProducts([...products, ...data]))
                    })
                    .catch(() => setLoading(false))
            }
        };
    
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [handleScroll]);

    console.log(products, loading)

    return (
        <div className="w-full mt-5 lg:mt-8 pb-5">
            <p className="text-xs md:text-sm lg:text-base mb-2">Search : <span className="text-gray-500">{getInputSearchText()}</span></p>
            <div className='mt-1 lg:mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 gap-y-2 md:gap-x-4 md:gap-y-5'>
                {products.map((product, index) => <ProductCard key={index} product={product} />)}
                {loading && new Array(15).fill(0).map((_, i) => <ProductCardSkleton key={i} />)}
            </div>
            {products.length === 0 && !loading && <div className="w-full flex justify-center items-center mt-5">
                <img src={noProduct} className="w-2/4" alt="" />
                </div>}
        </div>
    );
};

export default SearchPage;