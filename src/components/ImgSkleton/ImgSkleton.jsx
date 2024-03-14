import img from '../../assets/logo/png-02.png'

const ImgSkleton = () => {
    return (
        <div className='absolute top-0 left-0 w-full h-full z-30 bg-gradient-to-r from-orange-100 animate-pulse  flex justify-center items-center'>
            <img src={img} className='w-16 md:w-20' alt="" />
        </div>
    );
};

export default ImgSkleton;