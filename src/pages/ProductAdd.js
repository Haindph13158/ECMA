import { add, get, getAll} from "../api/product";
import { reRender } from "../utils/rerender";
import menuAdmin from "./Admin/menuAdmin";
import navBar from "./Admin/navbar";
import ProductAD from "./Admin/ProductAD";
import { getStorage, ref,uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import '../firebase/index'
import { getAllCategory } from "../api/category";

const ProductAdd = {
    
    async render() { 
    
    const {data} = await getAllCategory()
    
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
                                        <form id="form-add">
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
          <input type="text" class="form-control" id="nameproduct" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Ảnh</label>
          <input type="file" class="form-control" id="image">
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Giá</label>
          <input type="number" class="form-control" id="price">
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Mã sản phẩm</label>
          <input type="text" class="form-control" id="code">
      </div>
      <div class="mb-3">
          <select class="form-select"  id="status">
              <option selected>Trạng Thái</option>
              <option value="1">Còn hàng</option>
              <option value="2">Hết Hàng</option>
              
          </select>
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">số lượng</label>
          <input type="number" class="form-control" id="quantity">
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
    document.querySelector('#form-add').addEventListener('submit',  e =>{
        e.preventDefault();
        
        const storage = getStorage();
        const product = document.querySelector("#image").files[0];
        const storageRef = ref(storage, `images/${product.name}`);
        const uploadTask = uploadBytesResumable(storageRef, product);
        uploadTask.on('state_changed',
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then ((downloadURL) => {
                const data = {
                    idcategory: document.querySelector("#category").value,
                    name: document.querySelector("#nameproduct").value,
                    image:  downloadURL,
                    price: document.querySelector("#price").value,
                    code: document.querySelector("#code").value,
                    status: document.querySelector("#status").value,
                    Quantity: document.querySelector("#quantity").value,
                }
        
                add(data)
                reRender(ProductAD,'.admin')
                window.location.hash = '/admin/product'
                
                
                
            });
            }
        );
    });
    }
}
export default ProductAdd;