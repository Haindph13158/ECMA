import menuAdmin from "./menuAdmin";
import navBar from "./navbar";
import ProductAD from "./ProductAD";


const AdminPage = {

    async render() {

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
    

}
export default AdminPage;