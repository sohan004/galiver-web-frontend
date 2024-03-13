const getCartLimit = () => {
        const width = window.innerWidth;
        if (width < 768) {
            return 12
        }
        else if (width < 1024) {
            return 15
        }
        else if (width < 1280) {
            return 12
        }
        else {
            return 15
        }
}

export default getCartLimit