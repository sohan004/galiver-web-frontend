
// eslint-disable-next-line react/prop-types
const Button = ({ children, w = 'max-content'  }) => {
    return (
        <button className={`flex items-center gap-2 bg-orange-600 p-2 justify-center w-[${w}] select-none hover:bg-orange-700 duration-300 active:scale-90 text-white rounded-md text-sm`}>{children}</button>
    );
};

export default Button;