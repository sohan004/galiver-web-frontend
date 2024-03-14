import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../App"

const useGetProductDetails = (productId, userId) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(true)
            fetch(`${BACKEND_URL}/api/v1/product/detail/${productId}?user=${userId || ''}`)
                .then(res => res.json())
                .then(data => {
                    setProduct(data)
                    setLoading(false)
                })
                .catch(() => {
                    setLoading(false)
                    navigate('/product-404 ')
                })
        }, 0);
        return () => clearTimeout(timeOut)
    }, [productId, userId])

    return [product, loading]
}

export default useGetProductDetails

