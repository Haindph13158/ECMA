import { them } from "../api/sanpham"
import { reRender } from "../utils/rerender"

const themsanpham = {
     async render(){ /* html */
        return` 
       <div class="container">
       <h2 class= " text-center">Thêm sản phẩm</h2>
      <form id="form-add">
      <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">price</label>
      <input type="number" class="form-control" id="price">
  </div>
  <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">desc</label>
      <input type="number" class="form-control" id="desc">
  </div>
  <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">author</label>
      <input type="text" class="form-control" id="author">
  </div>
  <button class="btn btn-primary" id="submit-add" type ="submit">Submit</button>
      </div>
      
      </form>
        `
    },
    afterRender(){
        document.querySelector('#form-add').addEventListener('submit', async e => {
            e.preventDefault()
            const data = {
                title: document.querySelector("#title").value,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc").value,
                author: document.querySelector("#author").value,
            }
            them(data)
            await reRender(themsanpham,'.admin')
            window.location.hash = '/kiemtra'
            
        })
    }
}
export default themsanpham;