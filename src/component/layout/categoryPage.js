import { data } from "autoprefixer";
import { getAll, getPage, SearchRange, sortDesc, sortDesc2, sortDesc3 } from "../../api/product";
import slideProduct from "./slideProduct";

const CategoryPage = {

    async render({ id }) {
        const { data } = await sortDesc2();
        const products = data.filter((item) => (item.idcategory == id));
        return `
            <div class="container">
            <div class="row">
                <div class="col-4 mt-4">
                   <form>
                   <div class="font-bolder">
                   <h3>LỌC THEO GIÁ</h3>
               </div>
               <div class="">
               <div class="slidecontainer">
               
             <input type="range" min="1" max="400" value="100" class="slider" id="myRange" style ="width:90%"> <span class="fw-bold fs-2">$</span>
             <br><h2 id="demo"></h2>
           </div>
             <div class="">
                       <button  class="btn btn-dark mt-2 rounded-circle" id="inputRange">Lọc</button>
                   </div>
               </div>
               <div class="mt-5">
                   <h4>SẢN PHẨM NỔI BẬT</h4>
               </div>
                   </form>
                    <div class="bg-light  ">
                        <table class="table shop_attributes d-block">
                            <tbody>
                            ${products.map(item => (
            `
                                                    <tr>
                                                        <td>
                                                        <img src="${item.image}" alt="" width="70%"  >
                                                        </td>
                                                        <td>
                                                        <span class="">   ${item.name}  </span>
                                                            <p class="pt-2 text-danger"> ${item.price}$</p>
                                                            <p class="pt-2 text-warning"> Còn lại: ${item.Quantity}</p>
                                                        </td>
                                                    </tr>
                                                    
                                                    `
        )).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-8 mt-8  ">
                <div class="mt-5  d-flex" style ="width:50%">
            
                <select name="" id="submitform" class="form-control" data-id="${id}">
                <option selected >Chọn danh mục</option>
                <option value="asc">Tăng dần</option>
                <option value="desc">Giảm dần</option>
            </select>
              
                </div>
                    <div class="row productPrice">
                       ${products.map(item => (
            `
                           <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pb-3 mt-3 me-5">
                           <div class="card" style="width: 15rem;">
                               <img src="${item.image}" width="238px" height="152px" class="card-img-top" alt="...">
                               <div class="card-body text-center">
                                   <h5 class="font-monospace text-center">${item.name}</h5>
                                   <p class="font-monospace text-center text-danger">${item.price}$</p>
                                   <div class="">
                                   <a href="/#/product/${item.id}"><button class=" btn btn-danger text-end ">XEM CHI TIẾT</button></a> 
                                   </div>
                               </div>
                           </div>
                       </div>
                           `
        )).join("")}
                    </div>
                </div>
            </div>
            <div id="pagination"></div>
        </div>
         
        
        
        `
    },
    async afterRender() {
        const submitform = document.querySelector('#submitform');
        const dataid = submitform.getAttribute('data-id')
        const { data } = await sortDesc2();
        const products = data.filter((item) => (item.idcategory == dataid));
        const productPrice = document.querySelector('.productPrice');
        // 
        // const listPagination = []
        // for (let i = 0; i < products.length; i++) {
        //     listPagination.push(i);
        // }
        // const pageSize = 8;
        // $('#pagination').pagination({
        //     dataSource: listPagination,
        //     pageSize: pageSize,
        //     afterRender: async () => {
        //         const page = document.querySelector(".active").getAttribute('data-num')
        //         const dataProduct = await (await getPage(page, pageSize)).data
        //         productPrice.innerHTML = ` ${dataProduct.map(item => (
        //             `
        //                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pb-3 mt-3 me-5">
        //                                <div class="card" style="width: 15rem;">
        //                                    <img src="${item.image}" width="238px" height="152px" class="card-img-top" alt="...">
        //                                    <div class="card-body text-center">
        //                                        <h5 class="font-monospace text-center">${item.name}</h5>
        //                                        <p class="font-monospace text-center text-danger">${item.price}$</p>
        //                                        <div class="">
        //                                        <a href="/#/product/${item.id}"><button class=" btn btn-danger text-end ">XEM CHI TIẾT</button></a> 
        //                                        </div>
        //                                    </div>
        //                                </div>
        //                            </div>
        //                                `
        //         )).join("")}`
        //     },
        // })


        submitform.addEventListener('change', async (e) => {
            e.preventDefault()
            const sortProduct = await (await sortDesc3(submitform.value)).data

            const listproductsort = sortProduct.filter((item) => (item.idcategory === dataid))

            productPrice.innerHTML = ` ${listproductsort.map(item => (
                `
                               <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pb-3 mt-3 me-5">
                               <div class="card" style="width: 15rem;">
                                   <img src="${item.image}" width="238px" height="152px" class="card-img-top" alt="...">
                                   <div class="card-body text-center">
                                       <h5 class="font-monospace text-center">${item.name}</h5>
                                       <p class="font-monospace text-center text-danger">${item.price}$</p>
                                       <div class="">
                                       <a href="/#/product/${item.id}"><button class=" btn btn-danger text-end ">XEM CHI TIẾT</button></a> 
                                       </div>
                                   </div>
                               </div>
                           </div>
                               `
            )).join("")}`



        })
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        slider.addEventListener('change',async (e) => {
            e.preventDefault();
            output.innerHTML = e.target.value;
            
            
             
        })
        const inputRange = document.querySelector('#inputRange')
        
        inputRange.addEventListener('click', async (e) =>{
            e.preventDefault()
            const productRange = await (await SearchRange(0,slider.value)).data
            
            const newproductRange= productRange.filter(item => item.idcategory === dataid)
            productPrice.innerHTML = ` ${newproductRange.map(item => (
                `
                               <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pb-3 mt-3 me-5">
                               <div class="card" style="width: 15rem;">
                                   <img src="${item.image}" width="238px" height="152px" class="card-img-top" alt="...">
                                   <div class="card-body text-center">
                                       <h5 class="font-monospace text-center">${item.name}</h5>
                                       <p class="font-monospace text-center text-danger">${item.price}$</p>
                                       <div class="">
                                       <a href="/#/product/${item.id}"><button class=" btn btn-danger text-end ">XEM CHI TIẾT</button></a> 
                                       </div>
                                   </div>
                               </div>
                           </div>
                               `
            )).join("")}`
            
             
        })
       

    }
   

}
export default CategoryPage;