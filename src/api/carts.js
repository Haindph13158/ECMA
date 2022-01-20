import instance from "./axiosClient";

export const addListcart = (cart) => {
    const url = `/carts`;
    return instance.post(url,cart);
}
export const removeCart = (id) => {
    const url = `/carts/${id}`;
    return instance.delete(url);
}