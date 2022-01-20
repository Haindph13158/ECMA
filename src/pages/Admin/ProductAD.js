import { remove } from "../../api/product";
import { reRender } from "../../utils/rerender";
import menuAdmin from "./menuAdmin";
import navBar from "./navbar";


const ProductAD = {

    async render() {
        const reponse = await fetch('http://localhost:3000/product')
        const productAD = await reponse.json();
        const show = productAD.map((products,index) => {
            return `
            
                        <tr> 
                        <th>${index+1}</th>
                        <th>${products.id}</th>
                        <th>${products.idcategory}</th>
                        <th>${products.name}</th>
                        <th><img src="${products.image}" width="50" /></th>
                        <th>${products.price}</th>
                        <th>${products.code}</th>
                        <th>${products.status}</th>
                        <th>${products.Quantity}</th>
                        <th><a href="/#/admin/product/productedit/${products.id}" class="btn btn-warning">Edit</a></th>
                        <th><button id="btn-delete" class=" btn btn-danger" data-id="${products.id}" >Delete</button></th>
                        
                        </tr>
            `
        })
            
        return /* html */ `
                <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            ${menuAdmin.render()}   
            <div class="app-main">
            ${navBar.render()}
                        <div class="app-main__outer">
                            <div class="app-main__inner">       
                            <div class="container-fuild">
                                <div class="main-card mb-3 ">
                                    <div class="card-body" id="show-Content"><h2 class="card-title text-center fs-3">Bảng sản phẩm</h2>
                                    <div class="container-fuild">
                                    <div class="main-card mb-3 card">
                                        <div class="card-body">
                                        
                                            <table class="mb-0 table">
                                            <a href="/#/admin/product/productadd"> <button class= "btn btn-success  mb-3"> Thêm Sản Phẩm </button></a>
                                           
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>ID</th>
                                                    <th>ID Categories</th>
                                                    <th>Name</th>
                                                    <th>Image</th>
                                                    <th>Price</th>
                                                    <th>Code</th>
                                                    <th>Status</th>
                                                    <th>Quantity</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                
                                                </tr>
                                                </thead>
                                                <tbody> 
                                                ${show.join("")}
                                                </tbody>
                                                
                                                
                                            </table>
                                        </div>
                                    </div>
                                   </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="app-wrapper-footer">
                                <div class="app-footer">
                                    <div class="app-footer__inner">
                                    
                                    </div>
                                </div>
                            </div>    </div>
                </div>
            </div>
        
        
        
        `
    },
    afterRender(){    
       const btns = document.querySelectorAll('#btn-delete')
       btns.forEach((item) => {
          
           item.addEventListener('click', async () => {
                const id = item.getAttribute('data-id');
            
                if(window.confirm("bạn có muốn xóa sản phẩm không?")){
                    await remove(id);
                    reRender(ProductAD,'.admin')
                }
           })
       })
    }
}
export default ProductAD;