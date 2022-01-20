import axios from "axios";
import { authenticate, isAuthenticated, reRender } from "../utils/rerender";
import AdminPage from "./Admin/admin";
import homepage from "./homepage";

const signin = {
    render() {
        return `
    <div class="wrapper">
    <div class="sign-panels">
        <div class="login">
            <div class="title">
                <span>Sign In</span>
                <p>Welcome back, please login to your account. You can login with facebook, twitter or by your regular
                    user login.</p>
            </div>

            <div>
                <a href="#" class="btn-face"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
                <a href="#" class="btn-twitter"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
            </div>

            <div class="or"><span>OR</span></div>

            <form action="" id="formRegiter">
            <input type="email" placeholder="Nhập Email" id="email">
            <input type="password" placeholder="Password" id="password">
            <input type="checkbox" id="remember">
            <label for="remember">Keep me sign in</label>
            <button type="submit" class="btn btn-dark">Đăng nhập</button>
            <a href="/#/signup" class="d-block mt-5"> No have account, Sign Up here!</a>
            <div id="sucess"></div>
            <div id="error"></div>

          
        </form>
        </div>

            
</div>

    `

    },
    afterRender() {
        const formRegister = document.querySelector('#formRegiter');
        formRegister.addEventListener('submit', function (e) {
            e.preventDefault();

            const user = {
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value,

            };
            axios.post('http://localhost:3000/signin', user)
                .then(reponse => authenticate(reponse.data))
                .then(() => {
                    if (isAuthenticated().user.id === 1) {
                        window.location.hash = '/admin'
                        reRender(AdminPage)
                    }
                    else{
                        reRender(homepage,'#root')
                        window.location.hash = '/'
                        
                    }
                })

        })
    }



}
export default signin;