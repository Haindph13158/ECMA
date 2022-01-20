import showProduct from "../component/layout/showProduct";
import showProductSale from "../component/layout/showProductSale";
import slideProduct from "../component/layout/slideProduct";
import { removeAuthen } from "../utils/rerender";


const homepage = {
    async render() {
    /* html */
        return `
        <div class="container">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" >
                <img src="https://giayconversegiasi.files.wordpress.com/2016/06/homepage-banner-volt.jpg?w=1180&h=400&crop=1"  class="w-100"  alt=""  >
            </div>
            <div class="carousel-item " style="width:100%; height: 439px">
                <img src="https://snkrvn.com/wp-content/uploads/2019/05/Banner-2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" style="width:100%; height: 439px">
                <img src="https://www.converse.com.vn/pictures/catalog/home/slide-homepage/Chuck-70-banner-web-home.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button style="width: 50px;" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button style="width: 50px;" class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
   </div>

   <div class="container ">
   <div class="d-flex border-5 border-bottom mt-5 justify-content-center  ">
       <div class="m-2 dashboard1  ">
           <button class="btn  ">SẢN PHẨM MỚI</button>
           <span></span>
       </div>
       <div class="m-2 dashboard2 ">
           <button class="btn  ">SẢN PHẨM BÁN CHẠY</button>
           <span></span>
       </div>
       <div class="m-2 dashboard3 ">
           <button class="btn  ">SẢN PHẨM PHỔ BIẾN</button>
           <span></span>
       </div>

   </div>
   <div class="swiper-container1 container slideproduct">
       <!-- Additional required wrapper -->
       <div class="swiper-wrapper pb-5">
           <!-- Slides -->
           ${await slideProduct.render()}
       </div>


       <!-- If we need pagination -->
       <div class="swiper-pagination">

       </div>

       <!-- If we need navigation buttons -->
       <div class="swiper-button-prev"></div>
       <div class="swiper-button-next"></div>

       <!-- If we need scrollbar -->
   </div>
   <div class="d-flex  justify-content-center  ">
       <div class="m-2 container-fluid border-5 border-bottom mt-5 border-dark  ">
           <div class="text-center mb-3 fs-4">
               <span class="text-dark  ">PHỤ KIỆN KHÁC</span>

           </div>


       </div>
   </div>
   <div class="container-fluid">
       <div class="row  ">
           ${await showProduct.render()}
       </div>
       <div class=" mt-5 d-flex justify-content-center mb-5">
           <a href="/#/showall"><button class="text-secondary btn hover border-secondary">XEM TẤT CẢ</button></a>
       </div>
   </div>
   <div class="container-fluid  ">
       <div class="banner2 ">
           <div class="text-center text-light pt-5  ">
               <h3 class="">MONA SNE✰KER</h3>
           </div>
           <div class="fs-1 text-center ">
               <span class="text-light">KHUYẾN MÃI</span>
               <Span class="text-warning">GIẢM GIÁ 50%</Span>
           </div>
           <div class=" mt-5 d-flex justify-content-center">
               <a href=""><button class="text-light btn hover border-light mb-5">XEM SẢN PHẨM</button></a>
           </div>

       </div>
   </div>
   <div class="d-flex  justify-content-center  ">
       <div class="m-2 container-fluid border-5 border-bottom mt-5 border-dark  ">
           <div class="text-center mb-3 fs-4">
               <span class="text-dark  ">SẢN PHẨM GIẢM GIÁ</span>

           </div>


       </div>




   </div>
   <div class="container-fluid">
       <div class="row  ">
           ${await showProductSale.render()}
          
       </div>
   </div>
</div>
        `
    },
    afterRender (){
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
          
       
            }
            
    
   

}
export default homepage;