/* eslint-disable react/prop-types */
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ImgSkleton from "../../../../components/ImgSkleton/ImgSkleton";
import { useEffect, useRef, useState } from "react";
import getMedia from "../../../../utilities/getMedia";

const ProductImg = ({ media }) => {

    const [productDefaultPhoto, setProductDefaultPhoto] = useState(0)
    const mainImgRef = useRef()

    const getMainPhoto = () => {
        return media ? getMedia(media[productDefaultPhoto]?.name) : ''
    }

    const activeImg = (i) => {
        return productDefaultPhoto === i ? 'border border-orange-500' : 'border border-gray-200'
    }

    // useEffect(() => {
    //     const mainImgWidth = mainImgRef.current.offsetWidth
    //     const height = (1080 / 1920) * mainImgWidth
    //     mainImgRef.current.style.height = `${height}px`
    // }, [])
    
    return (
        <div className=" flex items-start gap-5 flex-col-reverse lg:flex-row select-none">
            <div className="lg:w-[15%] w-full grid grid-cols-5 lg:grid-cols-1 gap-3  md:gap-6">
                {
                    media?.map((m, i) => <div
                        onClick={() => setProductDefaultPhoto(i)}
                        className={`relative h-12 md:h-16 w-full cursor-pointer rounded-md overflow-hidden ${activeImg(i)}`} key={i}>
                        <img src={getMedia(m.name)} className="absolute top-0 object-cover left-0 w-full h-full z-40" alt="" />
                        <ImgSkleton></ImgSkleton>
                    </div>)
                }
            </div>
            <div
                ref={mainImgRef}
                className={`w-full lg:w-[85%] border  relative rounded-lg overflow-hidden h-[230px] md:h-[450px]`}>
                <img
                    src={getMainPhoto()} className="w-full  left-0 top-0 absolute  h-full z-40" alt="" />
                <ImgSkleton></ImgSkleton>
                {/* <MdOutlineFavoriteBorder className="text-2xl z-40 md:text-3xl absolute bottom-3 right-3 text-orange-600" /> */}
            </div>
        </div>
    );
};

export default ProductImg;