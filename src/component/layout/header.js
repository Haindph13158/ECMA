// import data from "../../api/fakedata";

import { Search } from "../../api/product";
import homepage from "../../pages/homepage";
import { reRender } from "../../utils/rerender";
import search from "./search";

// const {categories} = data
const Header = {
    async render() {
        let user = null
        const reponse = await fetch('http://localhost:3000/categories')
        const categories = await reponse.json();

        if (localStorage.getItem('user')) {
            user = JSON.parse(localStorage.getItem('user')).user

        }
        return ` 
        <div class="container-fluid bg-dark">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
           ${user?.email ? `<div class="test pt-2 pb-2">
           <p class="text-light">${user.email}</p>
           <div class="">
           <button id="abc" class="text-white pe-3">Đăng Xuất</button>
               <a href="/#/admin">Quản trị</a>
           </div>
       </div>` : `<a href="/#/signin" class="text-white text-decoration-none " style="font-weight: bold;">ĐĂNG NHẬP / ĐĂNG KÝ</a>`}
            <a href="/"><img src="https://i.ibb.co/sHZz13b/logo.png" alt="" class="py-3 " width="150px" height="150px"></a>
            <div class="d-flex ">

                <a href="/#/shopcart" class="text-white text-decoration-none " style="font-weight: bold;">GIỎ HÀNG <i
          class="fas fa-shopping-cart"></i></a>
            </div>

        </div>
    </div>

</div>
<div class="bg-light container-fluid ">
    <nav class="navbar navbar-expand-lg navbar-light container">
        <div class="container-fluid ">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto   ">
                    <li class="nav-item pe-3 ">
                        <a class="nav-link " aria-current="page" href="/">TRANG CHỦ</a>
                    </li>
                    ${categories.map(category => (
            `<li class="nav-item pe-3">
                                <a class="nav-link " href="/#/category/${category.id}">${category.name}</a>
                            </li>`
        )).join("")}
                    
                </ul>
                <form>
                <div class="d-flex">
                    <input class="form-control inputsearch me-2 mt-2 mb-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success mt-2 mb-2" type="submit">Search</button>
                </div>
        
                <div class="showsearch">
               
                </div>
            </form>
            </div>
        </div>
    </nav>

</div>
        
        `
    },
    afterRender() { 
        
        var timeout;
        const keysearch = document.querySelector(".inputsearch");
        const showSearchProduct = document.querySelector('.showsearch')
        var keyUpEventHandler2 = function (event) {
            clearTimeout(timeout);
            timeout = setTimeout(async () => {
                const keySearch = event.target.value;
               
                if (keySearch !== '') {
                    const listSearch = await (await Search(keySearch)).data;
                      setTimeout(() => {
                        showSearchProduct.innerHTML = search.render(listSearch)
                      }, 500)
                } else {
                    showSearchProduct.innerHTML = null;
                }

            }, 500);
        }

        keysearch.addEventListener('keyup', keyUpEventHandler2);

        const dangxuat = document.querySelector('#abc');
        dangxuat.addEventListener('click', async (e)=> {
            e.preventDefault();
            localStorage.removeItem('user');
            await reRender(homepage, '#root');
         
        })
    }
}
export default Header;