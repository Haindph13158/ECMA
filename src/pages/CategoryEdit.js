
import {getCategory, updateCategory } from "../api/category"
import { reRender } from "../utils/rerender"
import CategoriesAD from "./Admin/CategoryAD"
import menuAdmin from "./Admin/menuAdmin"
import navBar from "./Admin/navbar"

const CateEdit = {
    
    async render({id}) { 
        const {data} = await getCategory(id)
        return `
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
        <form id="form-addCate" data-id="${data.id}">
 
            <div class="mb-3">
            <label for="" class="form-label">Tên danh mục</label>
            <input type="text" class="form-control" value="${data.name}" id="name">
            </div>

             <button class="btn btn-primary" id="submit-add" type ="submit">Submit</button>
        </form>
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
    afterRender() {
    document.querySelector('#form-addCate').addEventListener('submit', e =>{
        e.preventDefault();
    const id = document.querySelector('#form-addCate').getAttribute('data-id');
        const data = {
            name: document.querySelector("#name").value
        };
        updateCategory(id,data)
        reRender(CategoriesAD,'.admin')
        window.location.hash = '/admin/categories'
    })
    }
}
export default CateEdit;