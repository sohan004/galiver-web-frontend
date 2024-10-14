/* eslint-disable react-hooks/exhaustive-deps */

import img from '../../assets/categoryImg/6b396809-87e7-435d-ba7b-5d69699371ba.png'
import { BiSolidDiscount } from "react-icons/bi";
import Button from "../../components/Button/Button";
import { GiReceiveMoney } from "react-icons/gi";
import { useEffect, useState } from "react";
import bkash from '../../assets/payment-logo/download.png'
import card from '../../assets/payment-logo/images.png'
import { FaArrowLeft } from 'react-icons/fa';
import { toggleAddressModal } from '../../components/Modal/components/AddressModal/AddressModal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFetchCartProductDetails from '../../Hooks/useFetchCartProductDetails';
import getMedia from '../../utilities/getMedia';
import { getAttrebute } from '../../utilities/cart';
import SelectDeliveryCharge from '../../components/SelectDeliveryCharge/SelectDeliveryCharge';
import { LuLoader } from 'react-icons/lu';
import { pushToDataLayer } from '../../main';
import { toggleGlobalLoading } from '../../components/Modal/components/GlobalLoading/GlobalLoading';
import { BACKEND_URL } from '../../App';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { clearCart, setCart } from '../../features/CartSideBar/CartSideBarSlice';


const PlaceOrder = () => {
    const cart = useSelector(state => state.cartSideBar.cart)
    const [method, setMethod] = useState('cash')
    const [localStorageCart, setLocalStorageCart] = useState({})
    const [product, loading] = useFetchCartProductDetails(localStorageCart)
    const query = new URLSearchParams(window.location.search)
    const [deliveryCharge, setDeliveryCharge] = useState(130)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [district, setDistrict] = useState('')
    const [subDistrict, setSubDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(true)
    const [totalProduct, setTotalProduct] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        product.forEach(item => {
            setTotalProduct(prev => prev + item.cart.quantity)
        })
    }, [product])


    useEffect(() => {
        if (!query.get('product')) {
            setLocalStorageCart(cart)
        }
    }, [cart])

    useEffect(() => {
        if (query.get('product')) {
            let data = {
                product: query.get('product'),
                quantity: query.get('quantity') || 1
            }
            if (query.get('size')) {
                data["size"] = query.get('size')
            }
            if (query.get('color')) {
                data["color"] = query.get('color')
            }
            if (query.get('material')) {
                data["material"] = query.get('material')
            }
            if (query.get('variant')) {
                data["variant"] = query.get('variant')
            }
            if (query.get('height')) {
                data["height"] = query.get('height')
            }
            if (query.get('width')) {
                data["width"] = query.get('width')
            }
            setLocalStorageCart({
                product: data
            })
        }
    }, [])

    const matchMethod = (name) => {
        if (method === name) {
            return 'bg-orange-600'
        }
        else {
            return 'bg-orange-200 '
        }
    }

    const getTotalPrice = () => {
        const totalPrice = product.reduce((acc, item) => {
            return acc + ((item.price - item.discount) * item.cart.quantity)
        }, 0)
        return totalPrice
    }

    const getDiscount = () => {
        const totalPrice = product.reduce((acc, item) => {
            return acc + item.discount
        }, 0)
        return totalPrice
    }

    const getInTotalPrice = () => {
        return getTotalPrice() + deliveryCharge
    }

    const confirm = () => {
        document.getElementById('buy-modal').showModal()
    }

    const submitOrder = () => {
        if (product.length === 0) return toast.error('No product found in cart')
        toggleGlobalLoading('open')
        document.getElementById('confirm-modal').close()
        fetch(`${BACKEND_URL}/api/v1/order/multi`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                products: Object.values(localStorageCart),
                name,
                phone,
                email,
                district,
                subDistrict,
                address,
                deliveryCharge,
            })
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "ধন্যবাদ।",
                    text: "আপনার অর্ডারটি সফলভাবে প্রক্রিয়াধীন করা হয়েছে। আমাদের কর্মী আপনার সাথে যোগাযোগ করবে।",
                    icon: ""
                });
                if (!query.get('product')) {
                    localStorage.removeItem('galiver-cart')
                    dispatch(clearCart())
                }
                navigate('/')
            })
            .catch(err => {
                toast.error('Something went wrong')
            })
            .finally(() => toggleGlobalLoading())
    }


    return (
        <div className='h-screen overflow-y-auto'>
            <p className="text-center bg-white sticky top-0 z-50 shadow p-2 font-semibold text-xl md:text-2xl">Checkout <span className="text-orange-600 ">({totalProduct})</span></p>
            <div className="max-w-[1188px] mx-auto  mt-5">
                <div className=" gap-5  flex flex-col md:flex-row px-3">
                    <div className="w-full md:w-[70%]">
                        {/* <button
                        onClick={() => toggleAddressModal('open')}
                        className={`flex items-center gap-2 w-full bg-orange-600 p-2 justify-center  select-none hover:bg-orange-700 duration-300 active:scale-90 text-white rounded-md text-sm`}> + add address</button> */}
                        <div className="rounded-md shadow-lg p-2 bg-white ">
                            <p className='flex items-center gap-2 ms-3 my-2 select-none cursor-pointer duration-300 '><FaArrowLeft className='text-orange-600 ' /> Back </p>
                            {loading && <div className="my-7 flex justify-center items-center">
                                <LuLoader className="text-3xl text-orange-500 animate-spin duration-300" />
                            </div>}
                            {
                                product.map((item, index) => <div key={index} className={`flex mt-5 items-center justify-between gap-4  px-3 pb-5 relative ${(product.length === (index + 1)) ? '' : 'border-b'}`}>
                                    <div className="flex items-center gap-3 flex-1">
                                        <p className="text-xs md:text-sm">{index + 1}.</p>
                                        <div className="flex gap-4 items-center">
                                            <img className="h-7 w-7 md:w-9 md:h-9 rounded-lg" src={
                                                getMedia(item?.media[0]?.name || '')
                                            } alt="" />
                                            <div className='flex-1'>
                                                <p className="text-xs md:text-base ">
                                                    {item?.title}
                                                </p>
                                                <p className="text-xs opacity-50 mt-1">
                                                    {getAttrebute(item)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs opacity-70">Qty: {item?.cart?.quantity}</p>
                                    <p className="text-sm">৳{(item?.price - item?.discount) * item?.cart?.quantity || 0}</p>
                                </div>)
                            }
                        </div>
                    </div>


                    <div className="w-full shadow-lg rounded-md md:w-[30%] bg-white p-3">
                        <div className="  flex flex-col gap-3 rounded-md  mx-auto">
                            <div
                                // onClick={() => setMethod('bkash')}
                                className=' p-2 flex items-center gap-4 cursor-pointer '>
                                <div className='rounded-full  border p-1 border-orange-600'>
                                    <p className={`h-3 w-3 rounded-full  ${matchMethod('bkash')}`}></p>
                                </div>
                                <img src={bkash} className='w-16 ' alt="" />
                            </div>

                            <div
                                // onClick={() => setMethod('card')}
                                className=' p-2 flex items-center gap-4 cursor-pointer'>
                                <div className='rounded-full  border p-1 border-orange-600'>
                                    <p className={`h-3 w-3 rounded-full  ${matchMethod('card')}`}></p>
                                </div>
                                <img src={card} className='w-20 ' alt="" />
                            </div>

                            <div
                                onClick={() => setMethod('cash')}
                                className=' p-2 flex items-center gap-4 cursor-pointer'>
                                <div className='rounded-full  border p-1 border-orange-600'>
                                    <p className={`h-3 w-3 rounded-full  ${matchMethod('cash')}`}></p>
                                </div>
                                <div className='flex items-end gap-2'>
                                    <GiReceiveMoney className='text-2xl  md:text-3xl text-blue-800' />
                                    <p className='text-base font-medium md:text-base'>Cash On Delivary</p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-10 font-medium mb-3 text-lg">Order Summary :</p>

                        {/* <button className="flex items-center gap-1 bg-blue-600 py-1 px-2 justify-center text-white rounded-md mb-3 text-xs active:scale-90 duration-300"><BiSolidDiscount className="text-xl " /> Apply Voucher</button> */}

                        <div className=" flex mb-20 flex-col gap-1    ">
                            <p className="text-sm flex items-center text-gray-800 justify-between "><span>Total Price</span> <span className="font-light">৳{getTotalPrice()}</span></p>
                         
                            <p className="text-sm flex items-center text-gray-800 justify-between  border-b pb-3 mb-1"><span>Delivery Charge</span> <span className="font-light">৳{deliveryCharge}</span></p>
                            <p className="text-xl flex items-center justify-between font-semibold"><span>Total</span> <span className="font-light">৳{getInTotalPrice()}</span></p>
                        </div>


                        <button
                            onClick={confirm}
                            className={`flex items-center w-full gap-2 bg-orange-600 p-4 md:p-2 fixed left-0 md:sticky md:top-full bottom-0 justify-center  select-none hover:bg-orange-700 duration-300 active:scale-90 text-white rounded-none md:rounded-md text-sm`}>Confirm Order</button>

                    </div>
                </div>
            </div>
            <SelectDeliveryCharge
                showModal={showModal}
                setShowModal={setShowModal}
                setDeliveryCharge={setDeliveryCharge} />



            <dialog id="buy-modal" className="modal">
                <div className="modal-box max-w-[5৫0px] rounded-md bg-white  relative select-none">
                    <p
                        onClick={() => document.getElementById('buy-modal').close()}
                        className="absolute top-3 right-3 cursor-pointer"> &#10006;</p>
                    <p className="text-center font-bold   md:text-xl text-orange-600">অর্ডার কনফার্ম করতে ফ্রমটি পূরন করুন</p>
                    <div className="mt-5 grid gap-4">
                        <div>
                            <label htmlFor="name" className="block text-xs md:text-sm font-semibold"> নাম*</label>
                            <input
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="আপনার নাম লিখুন"
                                type="text" id="name" className="mt-1 placeholder:text-xs w-full border border-gray-300  rounded-md p-1 outline-none px-1 bg-white" />
                        </div>
                        <div >
                            <label htmlFor="phone" className="block text-xs md:text-sm font-semibold">ফোন নাম্বার*</label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                name="phone"
                                placeholder="আপনার ফোন নাম্বার লিখুন"
                                type="text" id="phone" className="mt-1 placeholder:text-xs w-full border border-gray-300  rounded-md p-1 outline-none px-1 bg-white" />
                        </div>
                        <div >
                            <label htmlFor="address" className="block text-xs md:text-sm font-semibold">ইমেইল</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                name="address"
                                placeholder="আপনার ইমেইল লিখুন"
                                type="text" id="address" className="mt-1 placeholder:text-xs w-full border border-gray-300  rounded-md p-1 outline-none px-1 bg-white" />
                        </div>
                        <div >
                            <label htmlFor="district" className="block text-xs md:text-sm font-semibold">জেলা*</label>
                            <input
                                onChange={(e) => setDistrict(e.target.value)}
                                value={district}
                                name="district"
                                placeholder="আপনার জেলার নাম লিখুন"
                                type="text" id="district" className="mt-1 placeholder:text-xs w-full border border-gray-300  rounded-md p-1 outline-none px-1 bg-white" />
                        </div>
                        <div >
                            <label htmlFor="sub-district" className="block text-xs md:text-sm font-semibold">উপজেলা*</label>
                            <input
                                onChange={(e) => setSubDistrict(e.target.value)}
                                value={subDistrict}
                                name="sub-district"
                                placeholder="আপনার উপজেলার নাম লিখুন"
                                type="text" id="sub-district" className="mt-1 placeholder:text-xs w-full border border-gray-300  rounded-md p-1 outline-none px-1 bg-white" />
                        </div>
                        <div >
                            <label htmlFor="address" className="block text-xs md:text-sm font-semibold">সম্পুর্ন ঠিকানা*</label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                name="address"
                                placeholder="আপনার সম্পুর্ন ঠিকানা লিখুন"
                                type="text" id="address" className="mt-1 placeholder:text-xs w-full border border-gray-300  rounded-md p-1 outline-none px-1 bg-white" />
                        </div>

                    </div>
                    <button
                        disabled={!(name && phone && district && subDistrict && address)}
                        onClick={() => {
                            document.getElementById('buy-modal').close()
                            document.getElementById('confirm-modal').showModal()
                        }}
                        className="btn bg-orange-600 border-orange-600 text-white rounded-md hover:bg-orange-800 w-full mt-5"> সাবমিট করুন </button>
                </div>
            </dialog>


            <dialog id="confirm-modal" className="modal">

                <div className="modal-box max-w-[5৫0px] rounded-md bg-white  relative select-none">
                    <p className=' md:text-lg '>Details</p>
                    <p className='text-gray-500 mt-2'>নাম : <span className="text-gray-800">{name}</span></p>
                    <p className='text-gray-500 mt-2'>ফোন নাম্বার : <span className="text-gray-800">{phone}</span></p>
                    <p className='text-gray-500 mt-2'>জেলা : <span className="text-gray-800">{district}</span></p>
                    <p className='text-gray-500 mt-2'>উপজেলা : <span className="text-gray-800">{subDistrict}</span></p>
                    <p className='text-gray-500 mt-2'>ঠিকানা : <span className="text-gray-800">{address}</span></p>
                    <p
                        onClick={() => document.getElementById('confirm-modal').close()}
                        className="absolute top-3 right-3 cursor-pointer"> &#10006;</p>

                    <p className=' md:text-lg border-t mt-4 pt-4'>Order Summary</p>
                    <div className='mt-2 grid text-xs md:text-base gap-1 pb-5 border-b border-dashed'>
                        {
                            product.map((item, index) => <div key={index} className={`flex mt-5 items-center justify-between gap-4  px-3 pb-5 relative ${(product.length === (index + 1)) ? '' : 'border-b'}`}>
                                <div className="flex items-center gap-3 flex-1">
                                    <p className="text-xs md:text-sm">{index + 1}.</p>
                                    <div className="flex gap-4 items-center">
                                        <img className="h-7 w-7 md:w-9 md:h-9 rounded-lg" src={
                                            getMedia(item?.media[0]?.name || '')
                                        } alt="" />
                                        <div className='flex-1'>
                                            <p className="text-xs md:text-base ">
                                                {item?.title?.slice(0, 20)}...
                                            </p>
                                            <p className="text-xs opacity-50 mt-1">
                                                {getAttrebute(item)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs opacity-70">Qty: {item?.cart?.quantity}</p>
                                <p className="text-sm">৳{(item?.price - item?.discount) * item?.cart?.quantity || 0}</p>
                            </div>)
                        }
                        <div className=" flex  flex-col gap-1  ">
                            <p className="text-sm flex items-center text-gray-800 justify-between "><span>Total Price</span> <span className="font-light">৳{getTotalPrice()}</span></p>
                            <p className="text-sm flex items-center text-gray-800 justify-between "><span>Delivary Charge</span> <span className="font-light">৳{deliveryCharge}</span></p>
                            <p className="text-sm flex items-center text-gray-800 justify-between "><span>Discount</span> <span className="font-light">-৳{getDiscount()}</span></p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex justify-between text-lg md:text-xl'>
                            <p className=''>Total</p>
                            <p className=''>৳{getInTotalPrice()}</p>
                        </div>
                    </div>
                    <button
                        disabled={!(name && phone && district && subDistrict && address)}
                        onClick={submitOrder}
                        className="btn bg-orange-600 border-orange-600 text-white rounded-md hover:bg-orange-800 w-full mt-5">অর্ডার কনফার্ম করুন </button>
                </div>
            </dialog>
        </div>
    );
};

export default PlaceOrder;