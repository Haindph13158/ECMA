import axios from "axios";
import { addToCard } from "../../api/cart";
import { get, getAll } from "../../api/product";
import { reRender } from "../../utils/rerender";

const detailPage = {
    async render({id}) {
        let user = null
        if (localStorage.getItem('user')) {
          user = JSON.parse(localStorage.getItem('user')).user
           
       }
        const idproduct = id
        const { data } = await get(id);
        let listProductRelated = await (await getAll()).data;
        listProductRelated = listProductRelated.filter(item => (item.idcategory === data.idcategory))
        listProductRelated = listProductRelated.filter(item => (item.id !== data.id))
        const reponse = await fetch(`http://localhost:3000/comment`)
        const dataComments = await reponse.json();
        const dataComment = await dataComments.filter(item => item.idproduct === idproduct )
        const categorydata = await fetch(`http://localhost:3000/categories/${data.idcategory}`)
        const category = await categorydata.json();
        return `
    <div class="container mt-2">

        <div class="row mt-5">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="">
                    <a href=""><img src="${data.image}" alt="" width="100%" height="100%"></a>
                </div>

            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="">
                    <a href="" class="text-decoration-none text-dark font-monospace ">TRANG CHỦ /</a>
                        <a href="" class="text-decoration-none text-dark font-monospace ">${category.name}</a>
                </div>
                <div class="">
                    <h2 class="font-monospace ">${data.name}</h2>
                </div>
                <div class="fs-2 text-danger">
                    <SPAN><strong>${data.price} $</strong></SPAN>
                </div>
                <div class="">
                    <div class="quantity mt-3">
                        <button type="button" onclick="decreaseValue()" class="btn btn-danger"><i class="fas fa-minus"></i></button>
                        <input style="border-radius:5px;border:none;background: white;" disabled type="number" value="1" id="number" min="1">
                        <button type="button" onclick="increaseValue()" class="btn btn-success"><i class="fas fa-plus"></i></button>
                    </div>
                    <div class="">
                        <button id="btn" data-id=${data.id} class="btn btn-dark mt-3"><i class="fas fa-shopping-cart  me-2"></i>THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    <div class="fs-5 fw-bolder mt-4">
                        <span>Thanh toán</span>
                    </div>
                    <div class="mt-1">
                        <img src="./img/thanhtoan.png" alt="">
                    </div>
                    <div class="">
                        <p class="border"></p>
                        <span class=" fs-5">Mã sản phẩm: ${data.code}</span>
                        <p class="border"></p>
                       
                            <span class=" fs-5">Danh mục : ${category.name}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <ul class="d-flex">
                <li>
                    <a id="bosung" class=" btn btn-light text-dark bosung ">THÔNG TIN BỔ SUNG</a>
                </li>
                <li>
                    <a id="btn2" class="btn btn-dark text-light danhgia ">ĐÁNH GIÁ</a>
                </li>
            </ul>
        </div>
        <div class="border border-2 p-5 ">

            <div id="danhgia">
            <p class="fs-1">Đánh giá</p>
               <div id="returnComment">
               ${dataComment.map(item => (
                `
                <div class="comment-section p-5">
                    
                    <div class="media media-review">
                    <div class="media-user "><img src="https://erasmuscoursescroatia.com/wp-content/uploads/2015/11/no-user.jpg" alt="" class="rounded-circle" ></div>
                     <div class="media-body">
                    <div class="M-flex">
                     <p class="title text-black fw-normal text-secondary fs-5"><span class="fs-5 "> ${item.name} </span>${item.email}</p>
                    </div>
                    <div class="description">${item.description}</div>
                     </div>
                </div>
        
            </div>
                `
            )).join("")}
               </div>
               <form id="formComment" data-id="${id}">
                <div class="border border-danger border-3 mt-5 p-5">
               <p class=" fs-3 fw-bolder ">Hãy là người đầu tiên nhận xét “${data.name}” </p>
               <p class="fs-4 fw-bold">Nhận xét của bạn *</p>
               <div class="comment">
                           <p class="fs-4 fw-bold">Comment</p>
                           <input type="text" class="border" id="cmt" style="height="50px">
                       </div>
               <div class="d-flex">
                   <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                       <div class="comment">
                           <p class="fs-4 fw-bold">Tên *</p>
                           <input type="text" class="border" id="name">
                       </div>
                       <div class="quantity mt-3">
                           <button type="submit" class="btn btn-danger mt-2 fw-bolder">GỬI ĐI </button>
                       </div>
                   </div>
                   <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                       <div class="comment">
                           <p class="fs-4 fw-bold">Email *</p>
                           ${user?.email ? `<input type="email" class="border " id="email" value="${user.email}">` : `<input type="email" class="border " id="email" value="">`}
                       </div>
                   </div>
               </div>
               </div>
           </div>
               </form>
            <table class="table shop_attributes d-none">
                <tbody>
                    <tr>
                        <td>SKU</td>
                        <td>${data.code}</td>
                    </tr>
                    <tr>
                        <td>CHẤT LIỆU</td>
                        <td>Canvas</td>
                    </tr>
                    <tr>
                        <td>DANH MỤC</td>
                        <td>${category.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="swiper-container1 container slideproduct">
        <h1 class="mt-5 mb-5">SẢN PHẨM TƯƠNG TỰ</h1>
       <!-- Additional required wrapper -->
       <div class="swiper-wrapper pb-5">
           <!-- Slides -->
           ${listProductRelated.map(item => (
            `
            <div class="swiper-slide hoverbtn" >
            <img src="${item.image}" alt="" >
            <div class="box-text text-center p-2 ">
                <div class="title-wrapper">
                    <a href="" class="text-decoration-none text-dark font-monospace">${item.name}</a>
                </div>
                <div class="price-wrapper pb-3">
                    <span class="text-danger font-monospace">${item.price}$</span>
                </div>
                <div class="addtocardbutton">
                    <a href="/#/product/${item.id}"><button class="btn btn-danger text-light">XEM CHI
                            TIẾT</button></a>
                </div>
            </div>
        </div>
            `
        )).join("")}
       </div>
       <!-- If we need pagination -->
       <div class="swiper-pagination">
       </div>
       <!-- If we need navigation buttons -->
       <div class="swiper-button-prev"></div>
       <div class="swiper-button-next"></div>
       <!-- If we need scrollbar -->
   </div>
    </div>
    `
    },
    afterRender() {
        const btn = document.querySelector('#btn');
        const btn_id = btn.dataset.id;
        btn.addEventListener('click', async function () {
            var { data } = await get(btn_id);
            const newProduct = {
                ...data,
                quantity: parseInt(document.querySelector('#number').value)
            }
            alert('Đặt hàng thành công!')
            addToCard(newProduct);
        })
        $('.bosung').click(function (e) {
            e.preventDefault();
            $('.shop_attributes').removeClass('d-none');
            $('#danhgia').addClass('d-none');
            $('.bosung').removeClass('btn-light');
            $('.bosung').addClass('btn-dark');
            $('.bosung').addClass('text-light');
            $('.danhgia').removeClass('btn-dark');
            $('.danhgia').removeClass('text-light');
            $('.bosung').removeClass('btn-light');
            $('.bosung').removeClass('text-dark');
        });
        $('.danhgia').click(function (e) {
            e.preventDefault();
            $('.shop_attributes').addClass('d-none');
            $('#danhgia').removeClass('d-none');
            $('.danhgia').addClass('btn-dark');
            $('.danhgia').addClass('text-light');
            $('.danhgia').removeClass('btn-light`');
            $('.bosung').removeClass('btn-dark');
            $('.bosung').addClass('btn-light');
            $('.bosung').addClass('text-dark');
        });
        const swiper1 = new Swiper('.swiper-container1', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
        
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
        
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            // using "ratio" endpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                968: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10
                }
            }
           });
    const formComment = document.querySelector('#formComment')
 
    formComment.addEventListener('submit', async (e) =>{
        e.preventDefault();
        const id = formComment.dataset.id
        const comments= {
            idproduct: id,
            description: document.querySelector('#cmt').value,
            email: document.querySelector('#email').value,
            name: document.querySelector('#name').value,
        };
       
        const result = await axios.post(`http://localhost:3000/comment/`,comments);
        if (result.status===201) {
            const returnComment = document.querySelector('#returnComment')
            const reponse = await fetch(`http://localhost:3000/comment`)
            const dataComments = await reponse.json();
            const dataComment = await dataComments.filter(item => item.idproduct === id )
            returnComment.innerHTML = dataComment.map(item => (
                `
                <div class="comment-section p-5">
                    
                    <div class="media media-review">
                    <div class="media-user "><img src="https://erasmuscoursescroatia.com/wp-content/uploads/2015/11/no-user.jpg" alt="" class="rounded-circle" ></div>
                     <div class="media-body">
                    <div class="M-flex">
                     <p class="title text-black fw-normal text-secondary fs-5"><span class="fs-5 "> ${item.name} </span>${item.email}</p>
                    </div>
                    <div class="description">${item.description}</div>
                     </div>
                </div>
        
            </div>
                `
            )).join("");
           
            
        }
    } )


    
    },
    
}
export default detailPage;
