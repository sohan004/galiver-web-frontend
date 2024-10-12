import { setCart } from "../features/CartSideBar/CartSideBarSlice";

export const getCart = async (dispatch) => {
    const myCart = localStorage.getItem('galiver-cart');
    if (myCart) {
        dispatch(setCart(JSON.parse(myCart)));
    }
};

export const addToCart = async (dispatch, product) => {
    const myCart = localStorage.getItem('galiver-cart');
    const cart = myCart ? JSON.parse(myCart) : {};

    const productKey = `${product.product}-${product.color}-${product.size}-${product.height}-${product.width}-${product.material}-${product.variant}`;

    if (cart[productKey]) {
        cart[productKey].quantity += product.quantity;
    } else {
        cart[productKey] = { ...product };
    }

    localStorage.setItem('galiver-cart', JSON.stringify(cart));
    dispatch(setCart(cart));
};

export const removeFromCart = async (dispatch, id) => {
    const myCart = localStorage.getItem('galiver-cart');
    if (myCart) {
        const cart = JSON.parse(myCart);
        if (cart[id]) {
            delete cart[id];
        }
        localStorage.setItem('galiver-cart', JSON.stringify(cart));
        dispatch(setCart(cart));
    }
};

export const reduceQuantity = async (dispatch, id) => {
    const myCart = localStorage.getItem('galiver-cart');
    if (myCart) {
        const cart = JSON.parse(myCart);
        console.log(cart);

        if (cart[id]) {
            cart[id].quantity -= 1;
            localStorage.setItem('galiver-cart', JSON.stringify(cart));
            dispatch(setCart(cart));
        }
    }
};


export const increaseQuantity = async (dispatch, id) => {
    const myCart = localStorage.getItem('galiver-cart');
    if (myCart) {
        const cart = JSON.parse(myCart);

        if (cart[id]) {
            cart[id].quantity += 1;

            localStorage.setItem('galiver-cart', JSON.stringify(cart));
            dispatch(setCart(cart));
        }
    }
};


export const getAttrebute = (pro) => {
    let item = { ...pro?.cart };
    delete item['product'];
    delete item['quantity'];
    delete item['id'];
    return Object.keys(item).map(key => `${key}: ${item[key]}`).join(', ');
}
