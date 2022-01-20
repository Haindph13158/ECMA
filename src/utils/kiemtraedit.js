import { reRender } from "../utils/rerender";
import Kiemtra from "./kiemtra";

const Kiemtraedit = {
    async render({id}) {
        const product = await (await fetch(`https://616e3423a83a850017caa863.mockapi.io/products/${id}`)).json()
        return (
            `
            <form id="edit-form" class="container" data-id="${id}">
                
                <div class="form-group">
                    <label for="">Title</label>
                    <input type="text" value="${product.title}" class="form-control" id="title" placeholder="Title">
                </div>
                <div class="form-group">
                    <label for="">Price</label>
                    <input type="number" value="${product.price}" class="form-control" id="price" placeholder="price">
                 </div>
                 <div class="form-group">
                 <label for="">Description</label>
                 <input type="text" value="${product.desc}" class="form-control" id="desc" placeholder="Description">
                </div>
                <div class="form-group">
                <label for="">author</label>
                <input type="text" value="${product.author}" class="form-control" id="author" placeholder="author">
               </div>
                <button type="submit" class="btn btn-primary">Sửa sản phẩm</button>
            </form>
            `
        )
    },
    afterRender() {
        const editform = document.querySelector('#edit-form');
        const id = editform.getAttribute('data-id')
        editform.addEventListener('submit', async (e) => {
            e.preventDefault();
            const product = {
                title: document.querySelector("#title").value,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc").value,
                author: document.querySelector("#author").value,
            }
            const result = await fetch(`https://616e3423a83a850017caa863.mockapi.io/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            console.log(result);
            if(result.status === 200){
                reRender(Kiemtra, '#root');
                window.location.hash = '/kiemtra'
            }
        })
    }
}

export default Kiemtraedit