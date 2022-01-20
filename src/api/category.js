import instance from "./axiosClient";
export const getAllCategory = () => {
    const url = '/categories'
    return instance.get(url);
}
export const getCategory = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}
export const removeCategory = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}
export const addCategory = (category) => {
    const url = `/categories`;
    return instance.post(url,category);
}
export const updateCategory = (id,category) => {
    const url = `/categories/${id}`;
    return instance.patch(url,category);
}
