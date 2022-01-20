import { reRender } from "../utils/rerender";
import Kiemtra from "./kiemtra";

const KiemtraAdd = {
    render() {
        return (
            `
            <form id="add-form" class="container">
                
                <div class="form-group">
                    <label for="">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title">
                </div>
                <div class="form-group">
                    <label for="">Price</label>
                    <input type="number" class="form-control" id="price" placeholder="price">
                 </div>
                 <div class="form-group">
                 <label for="">Description</label>
                 <input type="text" class="form-control" id="desc" placeholder="Description">
                </div>
                <div class="form-group">
                <label for="">author</label>
                <input type="text" class="form-control" id="author" placeholder="author">
               </div>
                <button type="submit" class="btn btn-primary">Thêm sản phẩm</button>
            </form>
            `
        )
    },
    afterRender() {
        const addform = document.querySelector('#add-form');
        addform.addEventListener('submit', async (e) => {
            e.preventDefault();
            const product = {
                title: document.querySelector("#title").value,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc").value,
                author: document.querySelector("#author").value,
            }
            const result = await fetch('https://616e3423a83a850017caa863.mockapi.io/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            if(result.status === 201){
                reRender(Kiemtra, '#root');
                window.location.hash = '/kiemtra'
            }
        })
    }
}

export default KiemtraAdd;