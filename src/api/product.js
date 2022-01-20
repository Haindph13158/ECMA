import instance from "./axiosClient";
export const getAll = () => {
    const url = '/product'
    return instance.get(url);
}
export const get = (id) => {
    const url = `/product/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const add = (product) => {
    const url = `/product`;
    return instance.post(url,product);
}
export const update = (id,product) => {
    const url = `/product/${id}`;
    return instance.patch(url,product);
}
export const sortDesc = () => {
    const url = '/product?_sort=Quantity&_order=desc&_limit=8'
    return instance.get(url);
}
export const sortDesc2 = () => {
    const url = `/product/?_sort=Quantity&_order=asc`
    return instance.get(url);
}
export const sortDesc3 = (order) => {
    const url = `/product/?_sort=price&_order=${order}`
    return instance.get(url);
}

export const getPage = (page, limit) => {
    const url = `/product/?_page=${page}&_limit=${limit}`
    return instance.get(url)
}
export const Search = (keySearch) => {
    const url = `/product?name_like=${keySearch}`
    return instance.get(url)
}
export const SearchRange = (gte,lte) => {
    const url = `/product?price_gte=${gte}&price_lte=${lte}`
    return instance.get(url)
}

