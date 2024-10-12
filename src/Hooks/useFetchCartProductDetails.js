import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../App"

const useFetchCartProductDetails = (cartProduct) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    useEffect(() => {
        console.log(cartProduct);
        const timeOut = setTimeout(async () => {
            setLoading(true)
            let products = []
            await Promise.all(Object.keys(cartProduct).map(async (key) => {
                const productId = await cartProduct[key].product
                const ftc = await fetch(`${BACKEND_URL}/api/v1/product/detail/${productId}`)
                const data = await ftc.json()
                products.push({
                    ...data,
                    cart: {
                        ...cartProduct[key],
                        id: key
                    }
                });
            }))
            setProduct(products)
            setLoading(false)
        }, 0);
        return () => clearTimeout(timeOut)
    }, [cartProduct])

    return [product, loading]
}

export default useFetchCartProductDetails

