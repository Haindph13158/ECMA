import { removeCart } from "../../api/carts";

import { reRender } from "../../utils/rerender";
import menuAdmin from "./menuAdmin";
import navBar from "./navbar";


const cart = {

    async render() {
        const reponse = await fetch('http://localhost:3000/carts')
       
        const showcart = await reponse.json();
        
        const cart = showcart.map((item,index,)=> {
            var tongtien = 0;
            return`
            <tr> 
                        
            <th>${index+1}</th>        
            <th>${item.name}</th>
            <th>${item.email}</th>
            <th>${item.cart.map( item2 => ` - ${item2.name} x ${item2.quantity} <br>`).join('')}</th>
            <th>${item.cart.map( item2 => `   ${parseInt(item2.price)} x ${parseInt(item2.quantity)}<br>`).join('')}</th>
           
           
          
            
            
           
            <th><button id="btn-delete" class=" btn btn-danger" data-id="${item.id}" >Delete</button></th>
            
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
                                    <div class="card-body" id="show-Content"><h2 class="card-title text-center fs-3">Giỏ Hàng</h2>
                                    <div class="container-fuild">
                                    <div class="main-card mb-3 card">
                                        <div class="card-body">
                                        
                                            <table class="mb-0 table">
                                            
                                           
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Tên Người Dùng</th>
                                                    <th>Email</th>
                                                    <th>Sản Phẩm</th>
                                                    <th>Sub Total</th>
                                                   
                                                   
                                                    
                                                    <th>Xóa</th>
                                                    
                                                    
                                                
                                                </tr>
                                                </thead>
                                                <tbody> 
                                                <tr> 
                        
                            
                                                ${cart.join("")}
                       
                        
                        </tr>
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
                    await removeCart(id);
                    reRender(cart,'.admin')
                }
           })
       })
    }
}
export default cart;