/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import SubCategories from "../SubCategories/SubCategories";
import getMedia from "../../../../utilities/getMedia";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading, setProducts } from "../../../../features/searchProduct/searchProductSlice";
import getActiveCategory from "../../../../utilities/getActiveCategory";

// eslint-disable-next-line react/prop-types
const Categories = ({ item }) => {
    const [showSubCategories, setShowSubCategories] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const showSubCategory = () => {
            dispatch(setProducts([]))
            dispatch(setLoading(true))
            navigate(`/search?category=${item._id}`)
        if (item?.subCategory?.length > 0) {
            setShowSubCategories(!showSubCategories)
        }
    }



    return (
        <div className='  px-5 py-4 '>
            <div
                onClick={showSubCategory}
                className='flex items-center justify-between gap-2  duration-300 relative cursor-pointer'>
                <div className="flex cursor-pointer items-center gap-2  duration-300">
                    <img className='w-6 h-6' src={getMedia(item?.avatar)} alt="" />
                    <p className={`text-sm ${getActiveCategory('category', item?._id) ? 'text-orange-600' : ''}`}>{item.name}</p>
                </div>
                {item?.subCategory?.length > 0 && <FaChevronRight
                    className={`text-xs opacity-40 cursor-pointer duration-300 ${showSubCategories ? 'rotate-90 text-orange-600' : 'rotate-0'}`} />}
            </div>

            <div className={` transition-all sub-categories  overflow-hidden ease-in h-full ml-8 mt-1 max-h-0 border-s px-2 ${showSubCategories ? 'ease-in duration-700 max-h-[900px]' : 'max-h-0 ease-out duration-500'}`}>
                {item.subCategory.map((sub, i) => <SubCategories key={i} sub={sub} />)}
            </div>
        </div>
    );
};

export default Categories;