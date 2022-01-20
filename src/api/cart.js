export const getCartItems= () => {
    const cartItems = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
    return cartItems;
}
export const setCartItems = cart => {
    localStorage.setItem('cart',JSON.stringify(cart));
}
export const addToCard = (newProduct) => {
    let cartItems = getCartItems();
    console.log(cartItems);
    const existProduct = cartItems.find(data => data.id === newProduct.id);
  
    if (existProduct) {
        existProduct.quantity +=  newProduct.quantity
    } else{
        cartItems = [...cartItems,newProduct];
    }
    setCartItems(cartItems)
}
export const removeItemFromCart = (id) =>{
    const cartItems = getCartItems()
     console.log('cartItems',cartItems)
     const newCartItems = cartItems.filter(item => item.id != id)
     console.log('newCartItems', newCartItems)
     setCartItems(newCartItems);
 }