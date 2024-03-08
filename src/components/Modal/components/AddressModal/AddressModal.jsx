/* eslint-disable no-unused-vars */
import { IoIosClose } from "react-icons/io";
import toggleModal from "../../toggleModal";

import phone from '../../../../assets/addressLogo/phone.png'
import CITY from '../../../../assets/addressLogo/city.png'
import house from '../../../../assets/addressLogo/housing.png'
import location from '../../../../assets/addressLogo/placeholder.png'
import post from '../../../../assets/addressLogo/post-office.png'
import union from '../../../../assets/addressLogo/union.png'
import name from '../../../../assets/addressLogo/user.png'
import Select from 'react-select';
import { useState } from "react";
import { districtName, divisionName, unionList, upazilaName, allArea } from "../../../../utilities/cityName/bd_city_name";

// eslint-disable-next-line react-refresh/only-export-components
export const toggleAddressModal = (e) => {
    toggleModal('address-modal-parent', 'address-modal', e)
}

const AddressModal = () => {

    const [selectedDistrict, setSelectedDistrict] = useState(null)
    const [area, setArea] = useState(null)

    const inputStyle = (baseStyles, state, name) => {
        return {
            ...baseStyles,
            border: 0,
            boxShadow: "none",
            borderBottom: "2px solid #e5e7eb",
            // borderBottom: state.isFocused ? "2px solid #f97316" : "2px solid #e5e7eb",
            borderRadius: 0,
        }
    }

    const getDistrict = () => {
        const districtName = allArea.map(a=>{
            return {
                value: a.district,
                label: a.district
            }
        })
        return districtName
    }

    const getArea = () => {
        if(!selectedDistrict) return []
        const areaName = allArea.find(a=>a.district === selectedDistrict.value)
        const areaList = areaName?.areas.map(a=>{
            return {
                value: a,
                label: a
            }
        })
        return areaList
    }

    return (
        <>
            <div id="address-modal-parent" className="fixed hidden top-0 left-0 w-full h-full overflow-hidden backdrop-blur-sm bg-[#000000a1] z-[9999]"></div>

            <div id='address-modal' className="select-none max-w-[520px] fixed  p-4 top-2/4 invisible scale-90 opacity-0 left-2/4 -translate-x-2/4 duration-300  w-full -translate-y-2/4 z-[99999]">
                <div
                    className="rounded-lg bg-white relative p-3 ">
                    <IoIosClose
                        onClick={() => toggleAddressModal()}
                        className="absolute right-2 top-2 cursor-pointer select-none active:scale-75 text-4xl z-50" />
                    <div className="relative h-auto">
                        <h3 className="text-center text-base md:text-xl font font-semibold">Your Address</h3>
                        <div className="grid grid-cols-1 gap-5  md:gap-7 mt-3 px-2 md:px-3">
                            <div className="flex items-center gap-3">
                                <img className="w-6 h-6 md:w-7 md:h-7" src={name} alt="" />
                                <input
                                    type="text"
                                    className="peer w-full px-0.5 border-0 border-b-2 
                                                    py-2
                                                    text-sm text-gray-500
                                                    focus:ring-0 focus:border-orange-600
                                                    focus:outline-none bg-transparent"
                                    placeholder="Name*" />
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-6 h-6 md:w-7 md:h-7" src={phone} alt="" />
                                <input
                                    type="text"
                                    className="peer w-full px-0.5 border-0 border-b-2 
                                                    py-2
                                                    text-sm text-gray-500
                                                    focus:ring-0 focus:border-orange-600
                                                    focus:outline-none bg-transparent"
                                    placeholder="Phone Number*" />
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-6 h-6 md:w-7 md:h-7" src={location} alt="" />
                                <input
                                    type="text"
                                    className="peer w-full px-0.5 border-0 border-b-2 
                                                    py-2
                                                    text-sm text-gray-500
                                                    focus:ring-0 focus:border-orange-600
                                                    focus:outline-none bg-transparent"
                                    placeholder="Your Current Location*" />
                            </div>
                            {/* <div className="flex items-center gap-3">
                                <img className="w-6 h-6 md:w-7 md:h-7" src={union} alt="" />
                                <Select
                                    className="basic-single flex-1 border-0 relative"
                                    classNamePrefix="select"
                                    placeholder="District*"
                                    styles={{ control: (baseStyles, state) => (inputStyle(baseStyles)) }}
                                    name="color"
                                    value={selectedDistrict}
                                    onChange={(e) => {
                                        setSelectedDistrict(e)
                                        setArea(null)
                                    }}
                                    options={getDistrict()}
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-6 h-6 md:w-7 md:h-7" src={CITY} alt="" />
                                <Select
                                    className="basic-single flex-1 border-0 relative"
                                    classNamePrefix="select"
                                    placeholder="Area*"
                                    styles={{ control: (baseStyles, state) => (inputStyle(baseStyles)) }}
                                    onChange={(e) => setArea(e)}
                                    value={area}
                                    name="color"
                                    options={getArea()}
                                />
                            </div> */}
                        </div>
                        <div className="text-center mt-4 mb-3">
                            <button className="btn hover:bg-orange-700 bg-orange-600 w-28 border-0 btn-sm  text-white">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddressModal;