import { useEffect, useState } from "react";
import { BACKEND_URL } from "../App";

const useGetRandomProduct = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(true);
            fetch(`${BACKEND_URL}/api/v1/product/random`)
                .then(res => res.json())
                .then(data => {
                    setProduct(data?.products);
                    setLoading(false);
                })
        }, 0);
        return () => clearTimeout(timeOut);
    }, []);

    return [product, loading];
}


export default useGetRandomProduct;