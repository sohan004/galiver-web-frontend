import { FaStar } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import {  FaEarthAfrica, FaPeopleRoof } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import ProductCard from "../../components/ProductCard/ProductCard";
import { GiShoppingBag } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import scrollTop from "../../Hooks/useScrollTop";
import { NavLink, useParams } from "react-router-dom";
import useGetProductDetails from "../../Hooks/useGetProductDetails";
import { useSelector } from "react-redux";
import getProductTopCategoryLink from "../../utilities/getCategoryLink";
import ProductImg from "./components/ProductImg/ProductImg";
import { Rating } from "@smastrom/react-rating";
import getParentage from "../../utilities/getParcantage";


const ProductDetailsPage = () => {

    const id = useParams().id
    const user = useSelector(state => state.auth.user)
    const [product, loading] = useGetProductDetails(id, user?._id)


    console.log(product, loading)

    useEffect(() => {
        scrollTop()
    }, [])

    const imgLink = 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-1.png'



    return (
        <div className='bg-white p-4 pb-20'>
            {/* <ProductDetailsTopSection />
            <ReviewReletedSection /> */}

            <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-500">
                {getProductTopCategoryLink(product?.category, product?.subCategory, product?.subSubCategory)}
            </div>

            <div className="flex mt-7 gap-2 lg:gap-8 flex-col lg:flex-row">
                <div className="w-full lg:w-[60%]">
                    <div>
                        {product?.media && <ProductImg media={product?.media} />}
                        <h1 className="text-xl lg:text-3xl font-bold text-gray-800 mt-7 mb-4">{product?.title}</h1>
                    </div>
                </div>

                <div className="w-full lg:w-[40%]">
                    <div className="flex items-center gap-3  mb-3 lg:mb-6">
                    <Rating readOnly className='max-w-[70px]' value={4.5} />
                        <p className="text-sm font-medium text-gray-400">{product?.totalReview} Reviews</p>
                    </div>
                    <div className="text-3xl font-bold flex items-center gap-3">
                        <h3 className="text-orange-600">৳{product?.price}</h3>
                        <h3 className="text-gray-500 text-xl">{product?.discount > 0 &&<del>৳{product?.discount}</del>}</h3>
                    </div>
                 {product?.discount > 0 &&   <p className="text-xs text-gray-500 flex items-center gap-2 mt-2"><MdLocalOffer /> Save {getParentage(product?.discount, product?.price)}% right now</p>}
                    <div className="mt-6">
                        <p className="font-semibold">Features</p>
                        <ul className="text-gray-500 flex flex-col gap-1 mt-2 list-disc ps-5">
                            <li>Made with full cotton</li>
                            <li>Slim fit for any body</li>
                            <li>Quality control by JC</li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <p className="font-semibold">Colors</p>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="w-7 h-7 rounded cursor-pointer bg-red-600"></span>
                            <span className="w-7 h-7 rounded cursor-pointer bg-green-600"></span>
                            <span className="w-7 h-7 rounded cursor-pointer bg-blue-600"></span>
                            <span className="w-7 h-7 rounded cursor-pointer bg-gray-600"></span>
                        </div>
                    </div>
                    <div className="mt-9 flex items-center gap-0 md:gap-3  w-full bg-white">
                        <button className="btn bg-orange-600 border-orange-600 text-white rounded-none md:rounded-md hover:bg-orange-800 flex-1 md:max-w-[180px] fixed md:static bottom-0 left-0 w-full z-40"><GiShoppingBag className="text-2xl" /> Buy Now</button>
                        <button className="btn border border-orange-600 text-orange-600 bg-transparent rounded-md hover:bg-orange-600 hover:text-white  max-w-[180px]  ">Add To Cart <FiShoppingCart className="text-xl" /></button>
                    </div>
                    <div className="mt-7 flex flex-col gap-2">
                        <p className="flex items-center gap-2 text-sm text-gray-500"><FaEarthAfrica />Free shipping worldwide</p>
                        <p className="flex items-center gap-2 text-sm text-gray-500"><RiSecurePaymentFill />100% Secured Payment</p>
                        <p className="flex items-center gap-2 text-sm text-gray-500"><FaPeopleRoof />Made by the Professionals</p>
                    </div>
                </div>
            </div>
            <div className="flex  gap-8 flex-col lg:flex-row mt-7">
                <div className="w-full lg:w-[60%]">
                    <div className="flex items-end gap-6 text-gray-500 border-b lg:gap-8 text-xs lg:text-sm ">
                        <p className="py-3">Description</p>
                        <p className="py-3 text-black flex items-center gap-1 border-b border-black">Reviews <span className="bg-slate-400 text-white px-2 rounded-full text-xs">50</span></p>
                        <p className="py-3">Supports</p>
                    </div>
                    {new Array(4).fill(0).map((_, i) =>
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
                        </div>)}
                </div>
                <div className="w-full lg:w-[40%]">
                    <div className=" grid grid-cols-2">
                        {new Array(4).fill(0).map((_, i) => <ProductCard key={i} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
// new commit