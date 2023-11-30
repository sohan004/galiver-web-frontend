import img from '../../assets/carusalIMG/9252c791-78ee-4ff2-a5d1-d3e37ff4565b.jpg_1200x1200.jpg'
import ImgMegnify from '../../components/ImgMegnify/ImgMegnify';


const ProductDetailsPage = () => {


    return (
        <div className='max-w-[1188px] mx-auto bg-white'>
            <div className='flex flex-col lg:flex-row gap-3'>
                <div className='w-full lg:w-[40%] '>
                    <ImgMegnify img={img}></ImgMegnify>
                </div>
                <div className='w-full lg:w-[40%]'>
                    <h1 className='text-xl lg:text-2xl '>Gulabari Premium Rose Water 120 ml (Pack of 4)</h1>
                </div>
                <div className='w-full lg:w-[20%]'>

                </div>
            </div>
            {/* <ImgMegnify img={img}  /> */}
        </div>
    );
};

export default ProductDetailsPage;
// new commit