
const SidebarSkleton = () => {
    return (
        <div className='p-2 grid gap-5'>
            {new Array(15).fill(0).map((_, i) => <div className='p-3 bg-gray-100 rounded-lg flex gap-6 animate-pulse' key={i}>
                <p className='h-6 w-6 rounded-md bg-gray-200'></p>
                <p className='h-2 rounded-full bg-gray-200 flex-1'></p>
            </div>)}
        </div>
    );
};

export default SidebarSkleton;