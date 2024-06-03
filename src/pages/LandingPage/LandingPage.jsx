import { useEffect, useState } from 'react';
import useGetProductDetails from '../../Hooks/useGetProductDetails';
import img1 from '../../assets/landing/download (3).jpeg'
import img2 from '../../assets/landing/download (7).jpeg'
import { pushToDataLayer } from '../../main';
import { toggleGlobalLoading } from '../../components/Modal/components/GlobalLoading/GlobalLoading';
import { BACKEND_URL } from '../../App';


const LandingPage = () => {

    const [product, loading] = useGetProductDetails('6658d7bfb23a67a7a28594e1')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [district, setDistrict] = useState('')
    const [subDistrict, setSubDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [deliveryCharge, setDeliveryCharge] = useState(70)
    const [quantity, setQuantity] = useState(1)


    useEffect(() => {
        if(loading){
            toggleGlobalLoading('open')
        }
        else{
            toggleGlobalLoading('close')
        }
    }, [loading])



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

    const orderButton = <div
        onClick={() => document.getElementById('buy-modal').showModal()}
        className='flex justify-center mt-3'>
        <button className='btn bg-green-500 text-white font-bold text-2xl'>অর্ডার করুন</button>
    </div>

    return (
        <div className="md:p-5 p-2">
            <h1 className="text-center font-bold text-3xl md:text-5xl text-orange-600">এবার দু*ধের মতো ফর্সা হবে ইনশাআল্লাহ !!</h1>
            <h1 className="text-center font-bold my-3 md:my-7 text-lg md:text-3xl text-orange-800">Hand Made Original Saffron Goat Milk Soap</h1>
            <div className="text-2xl max-w-md mx-auto rounded-xl bg-red-600 py-3 text-white md:text-4xl font-bold flex items-center justify-center gap-3  mb-4 ">
                <h3 className="">মূল্যঃ 
                {product?.price - product.discount} টাকা</h3>
                <h3 className=" text-xl">{product?.discount > 0 && <del>৳{product?.price}</del>}</h3>
            </div>
            {orderButton}
            <h1 className="text-center  bg-orange-600 text-white p-5 font-bold text-xl  md:text-2xl mt-3">✔ ত্বক হবে দুধের মত ফর্সা, দাগ হীন,  মসৃণ, নমনীয় এবং গ্লাস স্কিন</h1>
            <img
                className='mx-auto h-[400PX] mt-3 md:h-[600px] object-cover'
                src={img1} alt="" />
            {orderButton}
            <h1 className="text-center mt-5  bg-orange-600 text-white p-5 font-bold  text-xl md:text-2xl ">
                স্যাফরন গোট মিল্ক সোপ এর উপকারিতা:-</h1>

            <div className='break-words whitespace-pre-wrap mt-4 text-lg md:text-2xl max-w-6xl mx-auto'>
                ✅ কয়েকদিন ব্যবহার করার সাথে সাথেই আপনি পরিবর্তন লক্ষ্য করে ফেলবেন।  <br />
                ✅ এটা ব্যবহারে আপনার এই স্কিন ব্রাইট করবে <br />
                ✅ স্কিন একদম ভেতর থেকে ক্লিন করবে <br />
                ✅ অনেক সফট করবে <br />
                ✅ আস্তে আস্তে ত্বকের দাগগুলো কমাবে। <br />
                ✅ এই সাবানটি ত্বকে ব্রণ কমাতে অনেক বেশি সাহায্য করে। <br />
                ✅ আপনার ফুল বডিতে এই সাবানটি ব্যবহার করতে পারবেন যা আপনার বডিকে ফেইসের ত্বকের মতো সুন্দর করে ফেলবে।
            </div>
            {orderButton}
            <img
                className='mx-auto h-[300px] md:h-[600px] mt-3 object-cover'
                src={img2} alt="" />
            {orderButton}

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
                        <div className=" gap-3 mt-1 flex items-center select-none">
                            <label htmlFor="sub-district" className="block text-base md:text-lg font-semibold text-orange-600">আপনি কত পিছ নিবেন</label>
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

export default LandingPage;