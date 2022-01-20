export const reRender = async (component, position = "") => {
    // position = #list-products 
    // component = ListProduct -> #list-product
    if (position) {
        
        document.querySelector(position).innerHTML = await component.render();
       
    } else {
        document.querySelector(".admin").innerHTML = await component.render();
    }
    await component.afterRender();
}

export const authenticate = (user) => {
    if(typeof window === 'undefined') return false
    return localStorage.setItem('user', JSON.stringify(user))
}
export const isAuthenticated = () => {
    if(typeof window ==='undefined') return false;
    if(localStorage.getItem('user')){
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}
export const removeAuthen = (callback) => {
    localStorage.removeItem('user');
    callback();
}