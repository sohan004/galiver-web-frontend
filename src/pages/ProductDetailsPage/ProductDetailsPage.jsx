import { FaStar } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { FaEarthAfrica, FaPeopleRoof } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import ProductCard from "../../components/ProductCard/ProductCard";
import { GiShoppingBag } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import scrollTop from "../../Hooks/useScrollTop";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useGetProductDetails from "../../Hooks/useGetProductDetails";
import { useDispatch, useSelector } from "react-redux";
import getProductTopCategoryLink from "../../utilities/getCategoryLink";
import ProductImg from "./components/ProductImg/ProductImg";
import { Rating } from "@smastrom/react-rating";
import getParentage from "../../utilities/getParcantage";
import useGetRandomProduct from "../../Hooks/useGetRandomProduct";
import ProductCardSkleton from "../../components/ProductCardSkleton/ProductCardSkleton";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../../App";
import Swal from "sweetalert2";
import GlobalLoading, { toggleGlobalLoading } from "../../components/Modal/components/GlobalLoading/GlobalLoading";
import ProductDetailsPageSkleton from "../../components/ProductDetailsPageSkleton/ProductDetailsPageSkleton";
import getMedia from "../../utilities/getMedia";
import { pushToDataLayer } from "../../main";
import { RiShoppingCartLine } from "react-icons/ri";
import { addToCart } from "../../utilities/cart";



const ProductDetailsPage = () => {

    const id = useParams().id
    const user = useSelector(state => state.auth.user)
    const [product, loading] = useGetProductDetails(id, user?._id)
    const randomProduct = useGetRandomProduct()
    const [selectedAttribute, setSelectedAttribute] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [district, setDistrict] = useState('')
    const [subDistrict, setSubDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [deliveryCharge, setDeliveryCharge] = useState(130)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        scrollTop()
    }, [id])


    const getAttributes = (name) => {
        const attributes = product?.attributes
        return attributes && attributes[name] ? attributes[name] : []
    }

    const selectAttribute = (name, value) => {
        setSelectedAttribute({ ...selectedAttribute, [name]: value })
    }

    const activeAttribute = (name, value, char) => {
        return selectedAttribute[name] === value ? true : false
    }

    const clickBuyNow = () => {
        let err = null
        Object.keys(product?.attributes).forEach(attribute => {
            if (!selectedAttribute[attribute] && !err && product?.attributes[attribute]?.length > 0) {
                err = true
                toast.error('Please select ' + attribute)
            }
        })
        if (err) return
        const attributes = Object.keys(selectedAttribute).map(key => `${key}=${selectedAttribute[key]}`).join('&')
        navigate(`/place-order?product=${product?._id}&quantity=${quantity}&${attributes}`)
    }

    const clickToCart = () => {
        let err = null
        Object.keys(product?.attributes).forEach(attribute => {
            if (!selectedAttribute[attribute] && !err && product?.attributes[attribute]?.length > 0) {
                err = true
                toast.error('Please select ' + attribute)
            }
        })
        if (err) return
        addToCart(dispatch,{
            product: product?._id,
            quantity,
            ...selectedAttribute
        })
        toast.success('Added to cart successfully')
    }



    if (loading) return <ProductDetailsPageSkleton />

    return (
        <div className='bg-white p-1 md:p-2 lg:p-4 pb-20'>
            <div className="flex mt-2 flex-wrap items-center gap-2 text-xs lg:text-sm text-gray-500">
                {getProductTopCategoryLink(product?.category, product?.subCategory, product?.subSubCategory)}
            </div>

            <div className="flex mt-4 gap-2 lg:gap-8 flex-col lg:flex-row">
                <div className="w-full lg:w-[60%]">
                    <div>
                        {product?.media && <ProductImg media={product?.media} />}

                    </div>
                </div>

                <div className="w-full lg:w-[40%]">
                    {/* <div className="flex items-center gap-3  mb-3 lg:mb-6">
                        <Rating readOnly className='max-w-[70px]' value={4.5} />
                        <p className="text-sm font-medium text-gray-400">{product?.totalReview} Reviews</p>
                    </div> */}
                    {product?.discount > 0 && <p className="text-xs text-gray-500 flex items-center gap-2 "><MdLocalOffer /> Save {getParentage(product?.discount, product?.price)}% right now</p>}
                    <h1 className="text-xl lg:text-3xl font-bold text-gray-800 mt-3 mb-4">{product?.title}</h1>
                    <div className="text-3xl font-bold flex items-center gap-3  mb-4 ">
                        <h3 className="text-orange-600">৳{product?.price - product.discount}</h3>
                        <h3 className="text-gray-500 text-xl">{product?.discount > 0 && <del>৳{product?.price}</del>}</h3>
                    </div>

                    {/* color */}
                    {getAttributes('color').length > 0 && <div className="mb-6">
                        <p className="font-semibold">Colors</p>
                        <div className="flex items-center gap-3 mt-1">
                            {getAttributes('color').map((color, i) => <span
                                onClick={() => selectAttribute('color', color.name)}
                                key={i} className={`w-7 h-7 rounded cursor-pointer ${activeAttribute('color', color.name) ? 'shadow-lg border-2 border-orange-600' : ''}`} style={{ backgroundColor: color.value }}></span>)}
                        </div>
                    </div>}
                    {getAttributes('height').length > 0 && <div className="mb-6">
                        <p className="font-semibold">Height</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('height').map((height, i) => <span
                                onClick={() => selectAttribute('height', height.name)}
                                key={i} className={`  border-r cursor-pointer py-1 px-2 ${activeAttribute('height', height.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{height.value}</span>)}
                        </div>
                    </div>}
                    {getAttributes('material').length > 0 && <div className="mb-6">
                        <p className="font-semibold">Material</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('material').map((material, i) => <span
                                onClick={() => selectAttribute('material', material.name)}
                                key={i} className={`  cursor-pointer border-r py-1 px-2 ${activeAttribute('material', material.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{material.value}</span>)}
                        </div>
                    </div>}
                    {getAttributes('size').length > 0 && <div className="mb-6">
                        <p className="font-semibold">Size</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('size').map((size, i) => <span
                                onClick={() => selectAttribute('size', size.name)}
                                key={i} className={`  cursor-pointer border-r py-1 px-2 ${activeAttribute('size', size.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{size.value}</span>)}
                        </div>
                    </div>}
                    {getAttributes('variant').length > 0 && <div className="mb-6">
                        <p className="font-semibold">Variant</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('variant').map((variant, i) => <span
                                onClick={() => selectAttribute('variant', variant.name)}
                                key={i} className={`  cursor-pointer border-r py-1 px-2 ${activeAttribute('variant', variant.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{variant.value}</span>)}
                        </div>
                    </div>}
                    {getAttributes('width').length > 0 && <div className="mb-6">
                        <p className="font-semibold">Width</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('width').map((width, i) => <span
                                onClick={() => selectAttribute('width', width.name)}
                                key={i} className={`  cursor-pointer border-r py-1 px-2 ${activeAttribute('width', width.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{width.value}</span>)}
                        </div>
                    </div>}

                    <div className="">
                        <p className="font-semibold">Quantity</p>
                        <div className=" gap-3 mt-1 flex items-center select-none">
                            <span
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                className="text-xl font-bold  cursor-pointer">-</span>
                            <input
                                className="w-10 border border-gray-300 rounded-md p-1 outline-none px-1 text-center bg-white"
                                type="number"
                                name=""
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value > 0 ? e.target.value : 1)}
                                id="" />
                            <span
                                onClick={() => setQuantity(quantity + 1)}
                                className="text-xl font-bold  cursor-pointer">+</span>
                        </div>
                    </div>

                    <div className=" flex items-center gap-0 md:gap-3 mt-7  w-full bg-white md:mb-7">
                        <button
                            onClick={clickBuyNow}
                            className="flex items-center justify-center py-3 gap-2 text-xl bg-orange-600 border-orange-600 text-white rounded-none md:rounded-md hover:bg-orange-800 flex-1 md:max-w-[180px] border fixed md:static bottom-0 left-0 w-2/4 z-[100] active:scale-100"><GiShoppingBag className="text-2xl" />Order Now</button>
                        <button
                            onClick={clickToCart}
                            className="flex items-center justify-center py-3 gap-2 text-xl bg-white border-orange-600 text-orange-600 rounded-none md:rounded-md border hover:bg-orange-600 flex-1 md:max-w-[180px] fixed hover:text-white md:static bottom-0 right-0 w-2/4 z-[100] active:scale-100"><RiShoppingCartLine className="text-2xl" />Add To Cart</button>
                        {/* <button className="btn border border-orange-600 text-orange-600 bg-transparent rounded-md hover:bg-orange-600 hover:text-white  max-w-[180px]  ">Add To Cart <FiShoppingCart className="text-xl" /></button> */}
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className="flex items-center gap-2 text-sm text-gray-500"><FaEarthAfrica />Hassle-free shipping</p>
                        <p className="flex items-center gap-2 text-sm text-gray-500"><RiSecurePaymentFill />100% Secured Payment</p>
                        <p className="flex items-center gap-2 text-sm text-gray-500"><FaPeopleRoof />Made by the Professionals</p>
                    </div>
                </div>
            </div>
            <div className="flex  gap-8 flex-col lg:flex-row mt-7">
                <div className="w-full lg:w-[60%]">
                    <div className="flex items-end gap-6 text-gray-500 border-b lg:gap-8 text-xs lg:text-sm ">
                        {/* <p className="py-3">Description</p> */}
                        <p className="py-3 text-black flex items-center gap-1 border-b border-black">Description </p>
                        {/* <p className="py-3">Supports</p> */}
                    </div>
                    <p className="whitespace-pre-wrap break-all mt-2 text-sm md:text-base">{product?.description}</p>
                    <div className="mt-10 ">
                        {product?.media && <div className="grid gap-7">
                            {product?.media.map((media, i) => <img key={i} src={getMedia(media.name)} className="w-full " alt="" />)}
                        </div>}
                    </div>
                    {/* {new Array(4).fill(0).map((_, i) =>
                        <div className="flex items-start gap-4 py-7" key={i}>
                            <img src={imgLink} className="w-12 rounded-full h-12" alt="" />
                            <div>
                                <div className="flex items-center gap-1 text-sm text-orange-400">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className="text-sm my-2 lg:my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis aut molestiae sit nesciunt magnam totam quaerat accusantium iste voluptas?</p>
                                <p className="font-semibold">aryan sohan</p>
                                <p className="text-sm text-gray-500">12/5/23</p>
                            </div>
                        </div>)} */}
                </div>
                <div className="w-full lg:w-[40%]">
                    <div className=" grid grid-cols-2">
                        {randomProduct[0].map((product, index) => <ProductCard key={index} product={product} />)}
                        {randomProduct[1] && new Array(15).fill(0).map((_, i) => <ProductCardSkleton key={i} />)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetailsPage;
// new commit