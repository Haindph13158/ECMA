
import { getAllCategory, removeCategory } from "../../api/category";
import { reRender } from "../../utils/rerender";
import menuAdmin from "./menuAdmin";
import navBar from "./navbar";

const CategoriesAD = {

    async render() {
        const {data} = await getAllCategory();
      
        const show = data.map((category,index) => {
            return `
            
                        <tr> 
                        <th>${index+1}</th>
                        <th>${category.id}</th>
                        <th>${category.name}</th>
                        <th><a href="/#/admin/categories/cateedit/${category.id}" class="btn btn-warning">Edit</a></th>
                        <th><button id="btn-delete" class=" btn btn-danger" data-id="${category.id}" >Delete</button></th>
                        
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
                                    <div class="card-body" id="show-Content"><h2 class="card-title text-center fs-3">Bảng danh mục</h2>
                                    <div class="container-fuild">
                                    <div class="main-card mb-3 card">
                                        <div class="card-body">
                                        
                                            <table class="mb-0 table">
                                            <a href="/#/admin/categories/cateadd"> <button class= "btn btn-success  mb-3"> Thêm Danh Mục </button></a>
                                           
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>ID Categories</th>
                                                    <th>Name</th>
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
                     await removeCategory(id);
                     await reRender(CategoriesAD,'.admin')
                 }
            })
        })
     }
}
export default CategoriesAD;