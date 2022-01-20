import { reRender } from "../utils/rerender";

const Kiemtra = {
    async render() {
        const products = await (await fetch('https://616e3423a83a850017caa863.mockapi.io/products')).json()
        
        return (
            `   
                
                
                <div class="container mt-5">
                <a class="btn btn-primary" href="/#/kiemtraadd"> Thêm sản phẩm </a>
                <table class="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>desc</th>
                        <th>author</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map((product, index) => (
                        `<tr>
                            <td id="product-id" ">${index + 1}</td>
                            <td>${product.title}</td>
                            <td>${product.price}</td>
                            <td>${product.desc}</td>
                            <td>${product.author}</td>
                            <td>
                                <button type="button" id="delete" data-id="${product.id}" class="btn btn-danger">Xóa</button>
                                
                                <a href="/#/kiemtraedit/${product.id}"  class="btn btn-primary">Sửa</a>
                                
                            </td>
                        </tr>`
                    )).join('')}
                </tbody>
            </table>
                </div>
                
                
            `
        )
    },
    afterRender() {
        const btn_delete = document.querySelectorAll('#delete');
        btn_delete.forEach((btn)=> {
            btn.addEventListener('click', async () => {
                const id = btn.getAttribute('data-id');
                if(window.confirm("Bạn có muốn xóa sản phẩm này không")){
                    const result = await fetch(`https://616e3423a83a850017caa863.mockapi.io/products/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    });
                    if(result.status === 200){
                        reRender(Kiemtra, '#root');
                        window.location.hash = '/kiemtra'
                    }
                }
            })
        })
    }
}

export default Kiemtra