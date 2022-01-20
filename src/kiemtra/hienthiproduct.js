
import { xoasanpham } from "../api/sanpham";
import { reRender } from "../utils/rerender";

const hienthisanpham = {
    async render() {
        const reponse = await fetch('http://localhost:3000/products')
        const productAD = await reponse.json();
        const show = productAD.map((products,index) => {
            return `
            
                        <tr> 
                        <th>${index+1}</th>
                        <th>${products.id}</th>
                        <th>${products.title}</th>
                        <th>${products.price}</th>
                        <th>${products.desc}</th>
                        <th>${products.author}</th>
                        <th><a href="/#/kiemtra/xoa/${products.id}" class="btn btn-warning">Edit</a></th>
                        <th><button id="delete" class=" btn btn-danger" data-id="${products.id}" >Delete</button></th>
                        
                        </tr>
            `
        })
            
        return /* html */ `
                <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
           
                        <div class="app-main__outer">
                            <div class="app-main__inner">       
                            <div class="container-fuild">
                                <div class="main-card mb-3 ">
                                    <div class="card-body" id="show-Content"><h2 class="card-title text-center fs-3">Bảng sản phẩm</h2>
                                    <div class="container-fuild">
                                    <div class="main-card mb-3 card">
                                        <div class="card-body">
                                        
                                            <table class="mb-0 table">
                                            <a href="/#/kiemtra/them"> <button class= "btn btn-success  mb-3"> Thêm Sản Phẩm </button></a>
                                           
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>ID</th>
                                                    <th>Title</th>
                                                    <th>Price</th>
                                                    <th>Desc</th>
                                                    <th>Author</th>
                                                    <th>Sửa</th>
                                                    <th>Xóa</th>
                                                    
                                                
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
        const btns = document.querySelectorAll('#delete')
      
        btns.forEach((item) => {
           
            item.addEventListener('click', async (e) => {
                e.preventDefault()
                 const id = item.getAttribute('data-id');
             
                 if(window.confirm("bạn có muốn xóa sản phẩm không?")){
                     await xoasanpham(id);
                     reRender(hienthisanpham,'.admin')
                 }
            })
        })
    }
}
export default hienthisanpham