import { sortDesc } from "../../api/product";


const slideProduct = {
    async render() {
        const {data} = await sortDesc();
       
        return`
        ${data.map(item => (
        `
        <div class="swiper-slide hoverbtn" >
        <img src="${item.image}" alt="" >
        <div class="box-text text-center p-2 ">
            <div class="title-wrapper">
                <a href="" class="text-decoration-none text-dark font-monospace">${item.name}</a>
            </div>
            <div class="price-wrapper pb-3">
                <span class="text-danger font-monospace">${item.price}$</span>
            </div>
            <div class="addtocardbutton">
                <a href="/#/product/${item.id}"><button class="btn btn-danger text-light">XEM CHI
                        TIẾT</button></a>
            </div>
        </div>
    </div>
        `

        )).join("")}
      
        `
    }
    
}
export default slideProduct;
