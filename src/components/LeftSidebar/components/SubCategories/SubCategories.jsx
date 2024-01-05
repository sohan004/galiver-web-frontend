/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const SubCategories = ({ sub, subSub }) => {
    const [showSubSubCategories, setShowSubSubCategories] = useState(false);
    return (
        <div>
            <p
              onClick={() => setShowSubSubCategories(!showSubSubCategories)}
            className={`text-xs py-2 flex items-center justify-between text-gray-600 cursor-pointer ${showSubSubCategories ? 'text-orange-600' : ''}`}>{sub.name}   <FaChevronRight
                className={`text-[9px] opacity-40 cursor-pointer duration-300 ${showSubSubCategories ? 'rotate-90' : 'rotate-0'}`} /></p>

            <div className={` transition-all sub-categories  overflow-hidden ease-in h-full ml-8 mt-1 max-h-0 border-s px-2 ${showSubSubCategories ? 'ease-in duration-700 max-h-[900px]' : 'max-h-0 ease-out duration-500'}`}>

                {subSub.map((sub, i) => <p key={i} className='text-xs py-2 flex items-center justify-between text-gray-400 cursor-pointer'>{sub.name}</p>)}
            </div>
        </div>
    );
};

export default SubCategories;