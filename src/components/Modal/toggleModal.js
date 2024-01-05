
const toggleModal = (parentId, childId, e) => {
    const parent = document.getElementById(parentId)
    const child = document.getElementById(childId)
    if (e === 'open') {
        parent.classList.remove('hidden')
        child.classList.remove('scale-0')
        child.classList.remove('opacity-0')
        child.classList.remove('top-[0%]')
        child.classList.add('scale-100')
        child.classList.add('opacity-100')
        child.classList.add('top-2/4')
    }
    else {
        parent.classList.add('hidden')
        child.classList.add('scale-0')
        child.classList.add('opacity-0')
        child.classList.add('top-[0%]')
        child.classList.remove('scale-100')
        child.classList.remove('opacity-100')
        child.classList.remove('top-2/4')
    }
};

export default toggleModal;