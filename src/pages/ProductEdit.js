import { getAllCategory } from "../api/category";
import { get, update } from "../api/product";
import menuAdmin from "./Admin/menuAdmin";
import navBar from "./Admin/navbar";
import '../firebase/index'
import ProductAD from "./Admin/ProductAD";
import { getStorage, ref,uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import { reRender } from "../utils/rerender";
const ProductEdit = {
    async render({id}) { 
    const product = await get(id);
    const {data} = await getAllCategory();
    const dataproduct =  product.data
    
   
    /* html */
      return` 

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
                                        <form id="form-add" data-id="${dataproduct.id}">
      <div class="mb-3">
          <select class="form-select"  id="category">
              <option selected>Chọn danh mục</option>
              ${data.map(category => (
                ` <option value="${category.id}">${category.name}</option>`
            )).join("")}
          </select>
      </div>
      
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Tên sản phẩm</label>
          <input type="text" class="form-control" value="${dataproduct.name}" id="nameproduct" aria-describedby="emailHelp"> 
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Ảnh</label>
          <input type="file" class="form-control" id="image">
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1"  class="form-label">Giá</label>
          <input type="number" class="form-control" value="${dataproduct.price}" id="price">
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label" >Mã sản phẩm</label>
          <input type="text" class="form-control" value="${dataproduct.code}" id="code">
      </div>
      <div class="mb-3">
          <select class="form-select"  id="status">
              <option selected>Trạng Thái</option>
              <option value="1">Còn hàng</option>
              <option value="2">Hết Hàng</option>
              
          </select>
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Số lượng</label>
          <input type="number" class="form-control" value="${dataproduct.Quantity}" id="quantity">
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
    afterRender(){
    document.querySelector('#form-add').addEventListener('submit', e =>{
        e.preventDefault();
        const id = document.querySelector('#form-add').getAttribute('data-id');
        const storage = getStorage();
        const imageproduct = document.querySelector("#image").files[0];
       
        const storageRef = ref(storage, `images/${imageproduct.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageproduct);
        uploadTask.on('state_changed',
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const data = {
                    idcategory: document.querySelector("#category").value,
                    name: document.querySelector("#nameproduct").value,
                    image:  downloadURL,
                    price: document.querySelector("#price").value,
                    code: document.querySelector("#code").value,
                    status: document.querySelector("#status").value,
                    Quantity: document.querySelector("#quantity").value,
                }
        
                update(id,data)
                reRender(ProductAD,'.admin')
                window.location.hash = '/admin/product'
                
                
                
            });
            }
        );
    });
    }
}
export default ProductEdit;