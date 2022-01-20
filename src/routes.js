import Navigo from "navigo";
import { ids } from "webpack";
import CategoryPage from "./component/layout/categoryPage";
import detailPage from "./component/layout/detailPage";
import Header from "./component/layout/header";
import ShopCart from "./component/layout/ShopCart";
import ShowAllProduct from "./component/layout/ShowAllProduct";
import showProduct from "./component/layout/showProduct";
import slideProduct from "./component/layout/slideProduct";
import hienthisanpham from "./kiemtra/hienthiproduct";
import themsanpham from "./kiemtra/themsanpham";
import xoasanpham from "./kiemtra/xoasanpham";
import AdminPage from "./pages/Admin/admin";
import cart from "./pages/Admin/cartAD";
import CategoriesAD from "./pages/Admin/CategoryAD";
import commentAD from "./pages/Admin/commentAD";
import ProductAD from "./pages/Admin/ProductAD";
import userAdmin from "./pages/Admin/userAdmin";
import CateAdd from "./pages/CategoryAdd";
import CateEdit from "./pages/CategoryEdit";
import homepage from "./pages/homepage"
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import signin from "./pages/signin";
import signup from "./pages/signup";


const router = new Navigo("/", { hash: true, linksSelector: "a" });

const display = async (page,afterRenDer) => {
    document.querySelector('#root').innerHTML = await page;
    if (afterRenDer) {
        await afterRenDer()
        
    }
}
const ShowAD = async (page, afterRenDer) => {
    document.querySelector('.admin').innerHTML = await page;
    if (afterRenDer) {
        await afterRenDer()
    }
}

const routes =  () => {
    router
        
        .on("/",() =>  display(homepage.render(),homepage.afterRender))
        .on("/kiemtra",() =>  ShowAD(hienthisanpham.render(),hienthisanpham.afterRender))
        .on("/kiemtra/them",() =>  ShowAD(themsanpham.render(),themsanpham.afterRender))
        .on("/kiemtra/xoa/:id",({data}) =>  ShowAD(xoasanpham.render(data),xoasanpham.afterRender))
        .on("/signup",() =>  display(signup.render(),signup.afterRender))
        .on("/signin",() =>  display(signin.render(),signin.afterRender))
        .on("/showall",() =>  display(ShowAllProduct.render(),ShowAllProduct.afterRender))
        .on("/shopcart",() =>  display(ShopCart.render(),ShopCart.afterRender))
        .on("/admin",() =>  ShowAD(AdminPage.render()))
        .on("/admin/product",() =>  ShowAD(ProductAD.render(),ProductAD.afterRender))
        .on("/admin/categories",() =>  ShowAD(CategoriesAD.render(),CategoriesAD.afterRender))
        .on("/admin/comment",() =>  ShowAD(commentAD.render(),commentAD.afterRender))
        .on("/admin/user",() =>  ShowAD(userAdmin.render(),userAdmin.afterRender))
        .on("/admin/cart",() =>  ShowAD(cart.render(),cart.afterRender))
        .on("/admin/categories/cateadd",() =>  ShowAD(CateAdd.render(),CateAdd.afterRender))
        .on("/admin/product/productadd",() =>  ShowAD(ProductAdd.render(),ProductAdd.afterRender))
        .on("/admin/product/productedit/:id",({data}) => {
            ShowAD(ProductEdit.render(data),ProductEdit.afterRender)
        })
        .on("/admin/categories/cateedit/:id",({data}) => {
            ShowAD(CateEdit.render(data),CateEdit.afterRender)
        })
        .on("/about", () => display())
        .on("/category/:id", ({data}) => {
            display(CategoryPage.render(data),CategoryPage.afterRender)
        })
        .on("/product/:id", ({data}) => {
            display(detailPage.render(data),detailPage.afterRender)
        })
        .notFound(() => {
            console.log("Not Found Page");
        })
        .resolve();
}
export default routes;
