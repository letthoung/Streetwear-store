export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(item => item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}


export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);
    if (existingCartItem){
        if (existingCartItem.quantity === 1){
            return cartItems.filter(item => cartItemToRemove.id !== item.id);
        } else {
            return cartItems.map(item => item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item)
        }
    }
}