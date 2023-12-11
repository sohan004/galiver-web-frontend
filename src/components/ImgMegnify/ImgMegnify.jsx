import { useState } from "react";

const ImgMegnify = ({
    // eslint-disable-next-line react/prop-types
    img
}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [show, setShow] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const onMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = ((e.pageX - left) / width) * 100
        const y = ((e.pageY - top) / height) * 100
        setPosition({ x, y })
        setCursorPosition({ x: e.pageX - left, y: e.pageY - top })
    }

    return (
        <>
            <div className='relative h-full w-full'>
                <img
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    onMouseMove={onMove}
                    src={img}
                    className='w-full h-full'
                    alt="" />
                {show && <span className="absolute top-0 left-0 h-full w-full bg-black pointer-events-none bg-opacity-50"></span>}
                {show && <div style={{
                    top: `${cursorPosition.y - 100}px`,
                    left: `${cursorPosition.x - 100}px`,
                }} className={` absolute pointer-events-none shadow-lg rounded-sm z-50 `}>
                    <div
                        style={{ backgroundImage: `url(${img})`, backgroundPosition: `${position.x}% ${position.y}%` }}
                        className={`h-[200px] bg-no-repeat w-[200px] bg-cover `}>
                    </div>
                </div>}
            </div>
        </>
    );
};

export default ImgMegnify;