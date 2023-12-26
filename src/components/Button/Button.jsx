
// eslint-disable-next-line react/prop-types
const Button = ({ children, w = 'max-content' }) => {
    return (
        <button style={{width: w}} className={`flex items-center gap-2 bg-orange-600 p-2 justify-center  select-none hover:bg-orange-700 duration-300 active:scale-90 text-white rounded-md text-sm`}>{children}</button>
    );
};

export default Button;