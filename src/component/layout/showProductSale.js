import { getAll } from "../../api/product";

const  showProductSale = {
    async render(){
        const { data } = await getAll();
        const product =  data.filter(item => (item.idcategory == 4))
       
        return `
        ${product.map((item2) => (
         `
         <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 hoverbtn  mt-5">
         <div class="ribbon"style="width:100%">
             <span class="ribbon2">Giảm 50%</span>
             <img src="${item2.image}" alt="">
         </div>

         <div class="box-text text-center">
             <div class="title-wrapper">
                 <a href="" class="text-decoration-none text-dark font-monospace">${item2.name}</a>
             </div>
             <div class="price-wrapper pb-4 ">
                <span class="text-danger font-monospace pe-3 opacity-50 text-decoration-line-through">${item2.price}$</span>
                 <span class="text-danger font-monospace">${item2.price = item2.price *(50/100)}$</span>
             </div>
             <div class="addtocardbutton">
                 <a href="/#/product/${item2.id}"><button class="btn btn-danger text-light">XEM CHI TIẾT</button></a>
             </div>
         </div>
     </div>
         `
     
        )).join("")}
        
        `
    }
}
export default showProductSale;