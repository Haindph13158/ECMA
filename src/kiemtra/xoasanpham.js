import { lay1sanpham, suasanpham, suaSanpham2, suasanpham2, them } from "../api/sanpham"
import { reRender } from "../utils/rerender"

const xoasanpham = { 
     async render({id}){ 
        
        
        const product =  lay1sanpham(id)
        
        const dataproduct = (await product).data
        return` 
       <div class="container">
       <h2 class= " text-center">Thêm sản phẩm</h2>
      <form id="form-xoa" data-id="${id}">
      <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">title</label>
      <input type="text" class="form-control" value="${dataproduct.title}" id="title">
  </div>
  <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">price</label>
      <input type="number" class="form-control" id="price" value="${dataproduct.price}">
  </div>
  <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">desc</label>
      <input type="number" class="form-control" id="desc" value="${dataproduct.desc}">
  </div>
  <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">author</label>
      <input type="text" class="form-control" id="author" value="${dataproduct.author}">
  </div>
  <button class="btn btn-primary" id="submit-add" type ="submit">Submit</button>
      </div>
      
      </form>
        `
    },
    afterRender(){
        document.querySelector('#form-xoa').addEventListener('submit', (e) => {
           
            e.preventDefault()
            const id = document.querySelector('#form-xoa').getAttribute('data-id');
            
            const data2 = {
                title: document.querySelector("#title").value,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc").value,
                author: document.querySelector("#author").value,
            };
            suaSanpham2(id,data2)
              reRender(xoasanpham,'.admin')
            
            
        })
    }
}
export default xoasanpham;