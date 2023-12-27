import { AiFillDelete } from "react-icons/ai";
import img from '../../assets/categoryImg/6b396809-87e7-435d-ba7b-5d69699371ba.png'
import { BiSolidDiscount } from "react-icons/bi";
import Button from "../../components/Button/Button";

const PlaceOrder = () => {
    return (
        <div className="max-w-[1188px] mx-auto">
            <p className="text-center bg-white shadow-lg p-2 font-semibold text-xl">Checkout <span className="text-orange-600">(01)</span></p>
            <div className=" gap-3  mt-4 flex flex-col md:flex-row px-3">
                <div className="w-full md:w-[70%]">
                    <Button w="100%">
                        + add address
                    </Button>
                    <div className="mt-2 rounded-md  p-2 bg-white">
                        {
                            new Array(5).fill(0).map((item, index) => <div key={index} className="flex mt-5 items-start gap-2 border-b p-3 relative">
                                <img className="h-10 w-10 md:h-12 md:w-12" src={img} alt="" />
                                <div>
                                    <p className="cursor-pointer text-sm md:text-base hover:underline">Lorem ipsum . Dignissimos!</p>
                                    <div className="flex items-center gap-4">
                                        <p className="mt-1">$120</p>
                                        <p>Qty: 4</p>
                                    </div>
                                </div>
                                <AiFillDelete className="text-xl absolute top-2/4 cursor-pointer hover:text-red-700 text-red-600 right-3 -translate-y-2/4" />
                            </div>)
                        }
                    </div>
                </div>
                <div className="w-full shadow rounded-md md:w-[30%] bg-white p-3">
                    <p>Order Summary :</p>

                    <button className="flex items-center gap-1 bg-blue-600 py-1 px-2 justify-center text-white rounded-md mt-5 mb-3 text-xs active:scale-90 duration-300"><BiSolidDiscount className="text-xl " /> Apply Voucher</button>

                    <div className="mt-7 flex flex-col gap-1   mb-20 ">
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Total Price</span> <span className="font-light">$122</span></p>
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Delivary Charge</span> <span className="font-light">$60</span></p>
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Tax</span> <span className="font-light">$0</span></p>
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Discount</span> <span className="font-light">$5</span></p>
                        <p className="text-sm border-b pb-2 mb-2 flex items-center justify-between font-semibold"><span>Voucher</span> <span className="font-light">$0</span></p>
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Total</span> <span className="font-light">$155</span></p>
                    </div>

                    <button className={`flex items-center w-full gap-2 bg-orange-600 p-4 md:p-2 fixed left-0 md:sticky md:top-full bottom-0 justify-center  select-none hover:bg-orange-700 duration-300 active:scale-90 text-white rounded-none md:rounded-md text-sm`}>Confirm Order</button>

                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;