import ReactImageMagnify from 'react-image-magnify';
import img from '../../assets/carusalIMG/9252c791-78ee-4ff2-a5d1-d3e37ff4565b.jpg_1200x1200.jpg'


const ProductDetailsPage = () => {
    return (
        <div className=''>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    src: img,
                    height: 300,
                    width: 600
                },
                largeImage: {
                    src: img,
                    height: 800,
                    width: 1600
                }
            }} />
        </div>
    );
};

export default ProductDetailsPage;