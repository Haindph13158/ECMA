import { getCartItems, removeItemFromCart } from "../../api/cart";
import { addListcart } from "../../api/carts";

import { reRender } from "../../utils/rerender";

const ShopCart = { /*html */
  render() {
    let user = null
    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user')).user
       
   }
    
    
   
  
    
   
    

    
    const cart = JSON.parse(localStorage.getItem('cart'))
    var tongtien = 0;
    
    
    return `
        <div class="container mt-5 pb-5">
        <table id="cart" class="table table-hover table-condensed">
          <thead>
            <tr>
              <th style="width:50%">Sản phẩm</th>
              <th style="width:10%">Giá</th>
              <th style="width:8%">Số lượng</th>
              <th style="width:22%" class="text-center">Subtotal</th>
              <th style="width:10%">Chức năng</th>
            </tr>
          </thead>
        
          <tbody>
           ${cart.map(item => (
            
      `
             <tr>
             <td data-th="Product">
               <div class="row">
                 <div class="col-sm-2 hidden-xs"><img src="${item.image}" alt="..." class="img-responsive" /></div>
                 <div class="col-sm-10">
                 <a href="/#/product/${item.id}" class="nomargin text-decoration-none fs-4 text-dark">${item.name}</a>
                   
                   <p>${item.code}</p>
                 </div>
               </div>
             </td>
             <td data-th="Price" class="text-danger">${item.price} $</td>
             <td data-th="Quantity">
             ${item.quantity}
             </td>
             <td data-th="Subtotal" class="text-center">${parseInt(item.price)*parseInt(item.quantity)}</td>
             <td class="actions" data-th="">
               
               <button class="btn btn-danger btn-sm" id="btnDeleteCartItem" data-id="${item.id}"><i class="fa fa-trash-o"></i></button>
             </td>
           </tr>
             `
         )).join("")}
          </tbody>
         
          <tfoot>
          

               
               
           
          </tfoot>
          
          
        </table>
              
        <p class="hidden-xs text-right fs-4 fw-bold " style="width:85%" >Total: <span class="total"></span> $</p>
     <form id="addlistcart"> 
     
     <div class="d-flex">
     <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
         <div class="comment">

             <p class="fs-4 fw-bold">Tên *</p>
             <input type="text" class="border " id ="name">


         </div>
         



     </div>
     <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
         <div class="comment">

             <p class="fs-4 fw-bold">Email *</p>
             
             ${user?.email ? `<input type="email" class="border " id="email" value="${user.email}">` : `<input type="email" class="border " id="email" value="">`}
         </div>
     </div>
     




 </div>



<div class="container mt-5 justify-content-center "> 
        
<a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a>
<td colspan="2" class="hidden-xs"></td>

<button type="submit" class="btn btn-success " >Checkout <i class="fa fa-angle-right"></i></button>
            
     </form>
  
  



  
  </div>

      </div>
      
        `

  },
  afterRender(){
    const cart = JSON.parse(localStorage.getItem('cart'));

    const showtotal = document.querySelector('.total');
    
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += Number(cart[i].quantity)*Number(cart[i].price);
    }
    showtotal.innerHTML = total
    const btnDelete = document.querySelectorAll('#btnDeleteCartItem');
      for( let btn of btnDelete ){
        const idCartItem = btn.dataset.id;
        console.log(idCartItem)
        btn.addEventListener('click',function(){
          if(window.confirm('Bạn có chắc chắn muốn xoá không ?')){
          removeItemFromCart(idCartItem)
          reRender(ShopCart,'#root')
          }
          else{
            reRender(ShopCart,'#root')
          }
        })
      }
      document.querySelector('#addlistcart').addEventListener('submit', async (e) =>{
        e.preventDefault();
        const data = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            cart: cart
        };
        const result = await addListcart(data);
        if(result.status ===201){
          localStorage.removeItem('cart')
          reRender(ShopCart,'.admin')
          alert('Đã đặt hàng thành công!')
          // window.location.hash = '/'
        }
       
    })
    }
  
  
 

}
export default ShopCart;