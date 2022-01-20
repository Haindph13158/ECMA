
import { getAllUser, removeUser } from "../../api/user";
import { reRender } from "../../utils/rerender";
import menuAdmin from "./menuAdmin";
import navBar from "./navbar";

const userAdmin = {
    async render(){
        const {data} = await getAllUser();
        const show = data.map((user,index) => {
            return `
            
                        <tr> 
                        <th>${index+1}</th>
                        <th>${user.id}</th>
                        <th>${user.email}</th>
                        <th>${user.password}</th>
                       
                        <th><button id="btn-delete" class=" btn btn-danger" data-id="${user.id}" >Delete</button></th>
                        
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
                                    <div class="card-body" id="show-Content"><h2 class="card-title text-center fs-3">Bảng User</h2>
                                    <div class="container-fuild">
                                    <div class="main-card mb-3 card">
                                        <div class="card-body">
                                        
                                            <table class="mb-0 table">
                                          
                                           
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>ID User</th>
                                                    <th>Email</th>
                                                    <th>password</th>
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
        console.log(btns);
        btns.forEach((item) => {
            item.addEventListener('click', async () => {
                 const id = item.getAttribute('data-id');
                 if(window.confirm("bạn có muốn xóa sản phẩm không?")){
                     await removeUser(+id);
                     await reRender(userAdmin,'.admin')
                 }
            })
        })
     }
}
export default userAdmin;