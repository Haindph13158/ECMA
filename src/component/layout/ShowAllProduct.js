import { data } from "autoprefixer";
import { getAll, sortDesc2, sortDesc3 } from "../../api/product";

const ShowAllProduct ={
     
    async render() {
        const { data : products } = await sortDesc2();
        
        return `
            <div class="container">
            <div class="row">
                <div class="col-4 mt-4">
                    <div class="font-bolder">
                        <h3>LỌC THEO GIÁ</h3>
                    </div>
                    <div class="">
                        <input type="range" class="form-range" id="customRange1">
                        <div class="price_label">
                            <span class="fs-5">0&nbsp;₫</span> — <span class="fs-5">2,800,000&nbsp;₫</span>
                        </div>
                        <div class="">
                            <input type="submit" value="LỌC" class="btn btn-dark mt-2 rounded-circle">
                        </div>
                    </div>
                    <div class="mt-5">
                        <h4>SẢN PHẨM NỔI BẬT</h4>
                    </div>
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
            
                <select name="" id="submitform" class="form-control">
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
        
        
        const productPrice = document.querySelector('.productPrice');
        
        const listPagination = []
        for (let i = 0; i < data.length; i++) {
            listPagination.push(i);
        }
        const pageSize = 8;
        $('#pagination').pagination({
            dataSource: listPagination,
            pageSize: pageSize,
           
        })
        

        submitform.addEventListener('change', async (e) => {
            e.preventDefault()
            const sortProduct = await (await sortDesc3(submitform.value)).data
           

            console.log(sortProduct);

            productPrice.innerHTML = ` ${sortProduct.map(item => (
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
export default ShowAllProduct;