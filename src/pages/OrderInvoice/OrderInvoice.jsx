
import logo from '../../assets/logo/png-04.png'
import logo2 from '../../assets/logo/png-02.png'
import QRCode from 'react-qr-code';
import Button from '../../components/Button/Button';
import { FaDownload } from 'react-icons/fa';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const OrderInvoice = () => {

    const ref = useRef(null)

    const handlePrint = useReactToPrint({
        content: () => ref.current,
      });


    return (
        <div id='main-div' className="max-w-[659px] mx-auto px-4 ">
            <div className='flex justify-end p-4'>
                <span
                    onClick={() => handlePrint()}
                >
                    <Button><FaDownload /> Download</Button>
                </span>
            </div>
            <div className=" shadow-lg">
                <div id='print-div' ref={ref} className="bg-white w-full p-4 md:p-8 rounded-lg   relative min-h-[842px] mx-auto">
                    <img className='absolute w-64 left-2/4 top-2/4 -translate-x-2/4 opacity-5 -translate-y-2/4' src={logo2} alt="" />
                    <div className="mb-4">
                        <h1 className="text-xl md:text-2xl font-extrabold mb-1 text-gray-800">Order Invoice</h1>
                        <p className="text-gray-400 text-sm">Order #78901 | January 15, 2023</p>
                    </div>

                    <div className="mb-4 border-b-2 border-gray-200 pb-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-md md:text-lg font-bold mb-1 text-gray-800">Billed to</h2>
                                <p className="text-gray-700 text-xs">John Doe</p>
                                <p className="text-gray-700 text-xs">City, Country</p>
                                <p className="text-gray-700 text-xs">+8800000000000</p>
                            </div>
                            <div className='text-xs flex flex-col items-start gap-'>
                                <img
                                    src={logo}
                                    alt="Company Logo"
                                    className="w-28  "
                                />
                                <p>www.galiverbd.com</p>
                                <p>Dhaka Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-2 mt-5">
                        <div className=' flex items-start justify-between gap-5 mb-4'>
                            <div className='mb-3 flex  flex-col gap-1'>
                                <p className=" text-xs">Payment Method: <span className='text-gray-500'>Bkash</span></p>
                                <p className=" text-xs">TXT Id: <span className='text-gray-500'>#26145612314513213456</span></p>
                                <p className=" text-xs">Payment: <span className='text-green-700'>Completed</span></p>
                            </div>
                            <QRCode
                                style={{ width: '70px', height: '70px' }}
                                value='esfsaefsa'
                            ></QRCode>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full mt-4">
                                <thead>
                                    <tr className="border-b-2 border-gray-200 text-sm">
                                        <th className="text-left py-1">SN.</th>
                                        <th className="text-left py-1">PN</th>
                                        <th className="text-left py-1">QTY</th>
                                        <th className="text-right py-1">PRICE</th>
                                    </tr>
                                </thead>
                                <tbody className='text-xs'>
                                    <tr className="border-b border-gray-200">
                                        <td className="text-left py-3">1.
                                        </td>
                                        <td className="text-left py-3">Elegant Furniture Set</td>
                                        <td className="text-left py-3">2</td>
                                        <td className="text-right py-3">$800.00</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="text-left py-3">2.
                                        </td>
                                        <td className="text-left py-3"> Furniture Set</td>
                                        <td className="text-left py-3">2</td>
                                        <td className="text-right py-3">$800.00</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="text-left py-3">3.
                                        </td>
                                        <td className="text-left py-3">qwrgqweg Furniture Set</td>
                                        <td className="text-left py-3">2</td>
                                        <td className="text-right py-3">$800.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="text-right flex flex-col gap-1">
                            <p className=" text-xs">Delivery Charge: <span className='text-gray-500'>$50</span></p>
                            <p className=" text-xs">Discount: <span className='text-gray-500'>-$30</span></p>
                            <p className=" text-xs">Tax: <span className='text-gray-500'>$00</span></p>
                            <p className="text-xs">Total:</p>
                            <p className="text md:text-xl font-bold text-orange-600">$1000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderInvoice;