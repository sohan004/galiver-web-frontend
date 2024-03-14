/* eslint-disable react/prop-types */
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ImgSkleton from "../../../../components/ImgSkleton/ImgSkleton";
import { useState } from "react";
import getMedia from "../../../../utilities/getMedia";

const ProductImg = ({ media }) => {

    const [productDefaultPhoto, setProductDefaultPhoto] = useState(0)

    const getMainPhoto = () => {
        return media ? getMedia(media[productDefaultPhoto]?.name) : ''
    }

    const activeImg = (i) => {
        return productDefaultPhoto === i ? 'border border-orange-500' : ''
    }

    return (
        <div className=" flex items-start gap-5 flex-col-reverse lg:flex-row select-none">
            <div className="lg:w-[15%] w-full grid grid-cols-4 lg:grid-cols-1  gap-6">
                {
                    media?.map((m, i) => <div
                    onClick={() => setProductDefaultPhoto(i)}
                    className={`relative h-16 md:h-24 w-full cursor-pointer rounded-md overflow-hidden ${activeImg(i)}`} key={i}>
                        <img src={getMedia(m.name)} className="absolute top-0 object-cover left-0 w-full h-full z-40" alt="" />
                        <ImgSkleton></ImgSkleton>
                    </div>)
                }
            </div>
            <div className="w-full lg:w-[85%]  h-[230px]  md:h-[350px]  lg:h-[470px] relative rounded-lg overflow-hidden">
                <img src={getMainPhoto()} className="w-full  left-0 top-0 absolute  h-full z-40" alt="" />
                <ImgSkleton></ImgSkleton>
                <MdOutlineFavoriteBorder className="text-2xl z-40 md:text-3xl absolute bottom-3 right-3 text-orange-600" />
            </div>
        </div>
    );
};

export default ProductImg;