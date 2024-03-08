/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const SubCategories = ({ sub }) => {
    const [showSubSubCategories, setShowSubSubCategories] = useState(false);


    const showSubCategory = () => {
        if (sub?.subSubCategory?.length > 0) {
            setShowSubSubCategories(!showSubSubCategories)
        }
    }


    return (
        <div>
            <p
                onClick={showSubCategory}
                className={`text-xs py-2 flex items-center justify-between text-gray-600 cursor-pointer ${showSubSubCategories ? 'text-orange-600' : ''}`}>{sub.name}   {sub?.subSubCategory?.length > 0 && <FaChevronRight
                    className={`text-[9px] opacity-40 cursor-pointer duration-300 ${showSubSubCategories ? 'rotate-90' : 'rotate-0'}`} />}
            </p>
            <div className={` transition-all sub-categories  overflow-hidden ease-in h-full ml-8 mt-1 max-h-0 border-s px-2 ${showSubSubCategories ? 'ease-in duration-700 max-h-[900px]' : 'max-h-0 ease-out duration-500'}`}>
                {sub?.subSubCategory.map((subSub, i) => <p key={i} className='text-xs py-2 flex items-center justify-between text-gray-400 cursor-pointer'>{subSub.name}</p>)}
            </div>
        </div>
    );
};

export default SubCategories;