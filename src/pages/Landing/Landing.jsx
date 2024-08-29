import { useEffect, useState } from 'react';
import useGetProductDetails from '../../Hooks/useGetProductDetails';
import img1 from '../../assets/landing/download (3).jpeg'
import img2 from '../../assets/landing/download (7).jpeg'
import { pushToDataLayer } from '../../main';
import { toggleGlobalLoading } from '../../components/Modal/components/GlobalLoading/GlobalLoading';
import { BACKEND_URL } from '../../App';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import getMedia from '../../utilities/getMedia';


const Landing = () => {

    const [product, setProduct] = useState({})
    const [selectedAttribute, setSelectedAttribute] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [district, setDistrict] = useState('')
    const [subDistrict, setSubDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [deliveryCharge, setDeliveryCharge] = useState(130)
    const navigate = useNavigate()
    const { data } = useLoaderData()
    console.log(data);

    useEffect(() => {
        setProduct(data?.product)
    }, [data?.product])



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



    const confirmOrder = () => {
        pushToDataLayer('orderConfirmButtonClick', {
            product: product?.title,
            price: product?.price,
            discount: product?.discount,
            productId: product?._id
        })
        toggleGlobalLoading('open')
        document.getElementById('confirm-modal').close()
        fetch(`${BACKEND_URL}/api/v1/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product: product?._id,
                quantity,
                name,
                phone,
                district,
                subDistrict,
                address,
                deliveryCharge,
                ...selectedAttribute
            })
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "ধন্যবাদ।",
                    text: "আপনার অর্ডারটি সফলভাবে প্রক্রিয়াধীন করা হয়েছে। আমাদের কর্মী আপনার সাথে যোগাযোগ করবে।",
                    icon: ""
                });
                navigate('/')
            })
            .catch(err => {
                toast.error('Something went wrong')
            })
            .finally(() => toggleGlobalLoading())
    }


    const click = () => {
        document.getElementById('varient-modal').close()
        document.getElementById('buy-modal').showModal()
        pushToDataLayer('buyNowButtonClick', {
            product: product?.title,
            price: product?.price,
            discount: product?.discount,
            productId: product?._id
        })
    }

    const checkDissabled = () => {
        let err = null
        Object.keys(product?.attributes || {}).forEach(attribute => {
            if (!selectedAttribute[attribute] && !err && product?.attributes[attribute].length > 0) {
                err = true
            }
        })
        if (err) return true
        else return false
    }

    const orderButton = <div
        onClick={() => document.getElementById('varient-modal').showModal()}
        className='flex justify-center mt-3 animate-bounce '>
        <button className='btn bg-green-500 text-white font-bold text-2xl'>অর্ডার করুন</button>
    </div>

    return (
        <div className="md:p-5 p-2">
            <h1 className="text-center font-bold text-3xl md:text-5xl text-orange-600">{data?.headline}</h1>
            <div className="text-2xl mt-4 max-w-md mx-auto rounded-xl bg-red-600 py-3 text-white md:text-4xl font-bold flex items-center justify-center gap-3  mb-4 ">
                <h3 className="">মূল্যঃ
                    <span className='ms-2'>{product?.price - product.discount}</span> টাকা</h3>
                <h3 className=" text-xl">{product?.discount > 0 && <del>৳{product?.price}</del>}</h3>
            </div>
            {orderButton}
            <h1 className="text-center  bg-orange-600 text-white p-5 font-bold text-xl  md:text-2xl mt-3">{product?.title}</h1>
            <img
                className='mx-auto h-[400PX] mt-3 md:h-[600px] object-cover'
                src={getMedia(data?.img1)} alt="" />
            {orderButton}
            <h1 className="text-center mt-5  bg-orange-600 text-white p-5 font-bold  text-xl md:text-2xl ">
            {data?.title1}</h1>

            <div className='break-words whitespace-pre-wrap mt-4 text-lg md:text-2xl max-w-6xl mx-auto'>
            {data?.description1}
            </div>
            {orderButton}
            <img
                className='mx-auto h-[300px] md:h-[600px] mt-3 object-cover'
                src={getMedia(data?.img2)} alt="" />
            {orderButton}
            <h1 className="text-center  bg-orange-600 text-white p-5 font-bold text-xl  md:text-2xl mt-3">{data?.title2}</h1>
            <div className='break-words whitespace-pre-wrap mt-4 text-lg md:text-2xl max-w-6xl mx-auto'>
            {data?.description2}
            </div>
            {orderButton}
            <img
                className='mx-auto h-[300px] md:h-[600px] mt-3 object-cover'
                src={getMedia(data?.img3)} alt="" />
            {orderButton}


            <dialog id="varient-modal" className="modal">
                <div className="modal-box max-w-[5৫0px] rounded-md bg-white  relative select-none">
                    <p
                        onClick={() => document.getElementById('varient-modal').close()}
                        className="absolute top-3 right-3 cursor-pointer"> &#10006;</p>
                    {getAttributes('color').length > 0 && <div className="mb-6">
                        <p className="font-semibold text-orange-600">কালার পছন্দ করুন*</p>
                        <div className="flex items-center gap-3 mt-1">
                            {getAttributes('color').map((color, i) => <span
                                onClick={() => selectAttribute('color', color.name)}
                                key={i} className={`w-7 h-7 rounded cursor-pointer ${activeAttribute('color', color.name) ? 'shadow-lg border-2 border-orange-600' : ''}`} style={{ backgroundColor: color.value }}></span>)}
                        </div>
                    </div>}
                    {getAttributes('height').length > 0 && <div className="mb-6">
                        <p className="font-semibold text-orange-600">উচ্চতা পছন্দ করুন*</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('height').map((height, i) => <span
                                onClick={() => selectAttribute('height', height.name)}
                                key={i} className={`  border-r cursor-pointer py-1 px-2 ${activeAttribute('height', height.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{height.value}</span>)}
                        </div>
                    </div>}
                    {getAttributes('material').length > 0 && <div className="mb-6">
                        <p className="font-semibold text-orange-600">মেটেরিয়াল পছন্দ করুন*</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('material').map((material, i) => <span
                                onClick={() => selectAttribute('material', material.name)}
                                key={i} className={`  cursor-pointer border-r py-1 px-2 ${activeAttribute('material', material.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{material.value}</span>)}
                        </div>
                    </div>}
                    {getAttributes('size').length > 0 && <div className="mb-6">
                        <p className="font-semibold text-orange-600">সাইজ পছন্দ করুন*</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('size').map((size, i) => <span
                                onClick={() => selectAttribute('size', size.name)}
                                key={i} className={`  cursor-pointer border-r py-1 px-2 ${activeAttribute('size', size.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{size.value}</span>)}
                        </div>
                    </div>}
                    {getAttributes('variant').length > 0 && <div className="mb-6">
                        <p className="font-semibold text-orange-600">ভেরিয়েন্ট পছন্দ করুন*</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('variant').map((variant, i) => <span
                                onClick={() => selectAttribute('variant', variant.name)}
                                key={i} className={`  cursor-pointer border-r py-1 px-2 ${activeAttribute('variant', variant.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{variant.value}</span>)}
                        </div>
                    </div>}
                    {getAttributes('width').length > 0 && <div className="mb-6">
                        <p className="font-semibold text-orange-600">প্রস্থ পছন্দ করুন</p>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                            {getAttributes('width').map((width, i) => <span
                                onClick={() => selectAttribute('width', width.name)}
                                key={i} className={`  cursor-pointer border-r py-1 px-2 ${activeAttribute('width', width.name) ? 'bg-orange-500 text-white shadow-lg rounded' : ''}`}>{width.value}</span>)}
                        </div>
                    </div>}
                    <div className="">
                        <p className="font-semibold text-orange-600">কত পিছ নিতে চাচ্ছেন</p>
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
                    <button
                        disabled={checkDissabled()}
                        onClick={click}
                        className="btn bg-orange-600 border-orange-600 text-white rounded-md hover:bg-orange-800 w-full mt-5"> সাবমিট করুন </button>
                </div>
            </dialog>

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
                        <div >
                            <label htmlFor="address" className="block text-xs md:text-sm font-semibold mb-2">ডেলিভারি চার্জ*</label>
                            <div className="flex items-center gap-2 text-xs md:text-sm">
                                <input type="radio" name="radio-8" className="radio radio-error"
                                    onChange={() => setDeliveryCharge(70)}
                                    checked={deliveryCharge === 70}
                                />
                                <span>ঢাকা সিটির মধ্যে ৭০ টাকা</span>
                            </div>
                            <div className="flex mt-2 items-center gap-2 text-xs md:text-sm">
                                <input type="radio" name="radio-8" className="radio radio-error"
                                    onChange={() => setDeliveryCharge(130)}
                                    checked={deliveryCharge === 130}
                                />
                                <span>ঢাকা সিটির বাহিরে ১৩০ টাকা</span>
                            </div>
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

                    {Object.keys(selectedAttribute).length > 0 && <div className="border-t mt-4">
                        {Object.keys(selectedAttribute).map((attribute, i) => <p key={i} className='text-gray-500 mt-2'>{attribute} : <span className="text-gray-800">{selectedAttribute[attribute]}</span></p>)}
                    </div>}

                    <p className=' md:text-lg border-t mt-4 pt-4'>Order Summary</p>
                    <div className='mt-2 grid text-xs md:text-base gap-1 pb-5 border-b border-dashed'>
                        <div className='flex justify-between'>
                            <p className='text-gray-500'>{product?.title}</p>
                            <p className='text-gray-800'>৳{(product?.price - product.discount)}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-gray-500'>Quantity</p>
                            <p className='text-gray-800'>{quantity}x</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-gray-500'>Delivery charge</p>
                            <p className='text-gray-800'>৳{deliveryCharge}</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex justify-between text-lg md:text-xl'>
                            <p className=''>Total</p>
                            <p className=''>৳{((product?.price - product.discount) * quantity) + deliveryCharge}</p>
                        </div>
                    </div>
                    <button
                        disabled={!(name && phone && district && subDistrict && address)}
                        onClick={() => {
                            confirmOrder()
                            // document.getElementById('confirm-modal').close()
                        }}
                        className="btn bg-orange-600 border-orange-600 text-white rounded-md hover:bg-orange-800 w-full mt-5">অর্ডার কনফার্ম করুন </button>
                </div>
            </dialog>
        </div>
    );
};

export default Landing;