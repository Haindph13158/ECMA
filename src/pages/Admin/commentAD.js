import { reRender } from "../../utils/rerender";
import menuAdmin from "./menuAdmin";
import navBar from "./navbar";

const commentAD = {
    async render() {
        const reponse = await fetch('http://localhost:3000/comment')
        const Comment = await reponse.json();
        const show = Comment.map((products,index) => {
            return `
            
                        <tr> 
                        <th>${index+1}</th>
                        <th><a href="/#/product/${products.idproduct}"target="_blank">${products.idproduct}</a></th>
                        <th>${products.description}</th>
                        <th>${products.email}</th>
                        <th>${products.name}</th>
                      
                    
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
                                    <div class="card-body" id="show-Content"><h2 class="card-title text-center fs-3">Bảng Comment</h2>
                                    <div class="container-fuild">
                                    <div class="main-card mb-3 card">
                                        <div class="card-body">
                                        
                                            <table class="mb-0 table">
                                            
                                           
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>ID Product</th>
                                                    <th>description</th>
                                                    <th>Email</th>
                                                    <th>Name</th>
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
       const btns = document.querySelectorAll('#btn-delete')
       btns.forEach((item) => {
          
           item.addEventListener('click', async () => {
                const id = item.getAttribute('data-id');
            
                if(window.confirm("bạn có muốn xóa sản phẩm không?")){
                    const result = await fetch(`http://localhost:3000/comment/${id}`,{
                        method: 'DELETE',
                        headers: {
                            'Content-Type' : 'Application/json'
                        },
                    });
                    if (result.status === 200) {
                        await reRender(commentAD,'.admin')
                    }
                    reRender(commentAD,'.admin')
                   
                    
                }
           })
       })
    }
}
export default commentAD;