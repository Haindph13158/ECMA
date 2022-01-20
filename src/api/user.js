import instance from "./axiosClient";
export const getAllUser = () => {
    const url = '/users'
    return instance.get(url);
}
export const getUser = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
}
export const removeUser = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}
export const addUser = (user) => {
    const url = `/users`;
    return instance.post(url,user);
}
export const updateUser = (id,user) => {
    const url = `/users/${id}`;
    return instance.patch(url,user);
}
