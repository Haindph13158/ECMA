const search = {
    render(listSearch){
    
        return  `
        ${listSearch.map((product) => (
            `<div class="d-flex">
                                
            <table class= "bg-light p-3">
            <th style ="width:40%"><img src="${product.image}" alt=""></th>
            <th class="ps-5"> <a href="/#/product/${product.id}">${product.name}</a> <p>${product.code}</p> <p class="text-danger">${product.price}$</p> </th>
                
            </table>
        
            </div>`
        )).join('')}
        `
    }
}
export default search;