
import instance from "./axiosClient";
export const laytatca = () => {
    const url = '/products'
    return instance.get(url);
}
export const lay1sanpham = (id) => {
    const url = `/products/${id}`
    return instance.get(url);
}
export const suaSanpham2 = (id,product) => {
    const url = `/products/${id}`;
    return instance.patch(url,product);
}
export const xoasanpham = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const them = (products) => {
    const url = `/products`;
    return instance.post(url,products);
}