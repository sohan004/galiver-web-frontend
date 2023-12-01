import { Rating } from '@smastrom/react-rating'
import img from '../../assets/logo/d998019b-9b34-44be-b747-1e6d5a892e2c.png'
import '@smastrom/react-rating/style.css'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
const ReviewCard = () => {
    return (
        <div className="p-4 border-b mb-4">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <Rating readOnly className='max-w-[70px]' value={4.5} />
                    <p className='text-sm'>sohan</p>
                </div>
                <p className='text-xs'>1 year ago</p>
            </div>
            <div className='mt-2 flex flex-wrap items-center gap-2'>
                <img className='h-12 w-12' src={img} alt="" />
                <img className='h-12 w-12' src={img} alt="" />
                <img className='h-12 w-12' src={img} alt="" />
            </div>
            <div className='flex  items-end gap-3'>
                <p className='text-sm mt-3 flex-grow '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt hic quo distinctio totam aliquid praesentium.</p>
                <div className='flex items-start gap-3'>
                    <p className='flex flex-col justify-center text-sm'><AiOutlineLike />4</p>
                    <p className='flex flex-col justify-center text-sm'><AiOutlineDislike />0</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;