import axios from "axios";

const signup = {
     render() { /* html */
        return ` 
    <div class="wrapper">
    <div class="sign-panels">
        <div class="login">
            <div class="title">
                <span>Sign Up</span>
                <p>Welcome back, please login to your account. You can login with facebook, twitter or by your regular
                    user login.</p>
            </div>

            <div>
                <a href="#" class="btn-face"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
                <a href="#" class="btn-twitter"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
            </div>

            <div class="or"><span>OR</span></div>

        <form action="" id= "formRegister">
            <input type="email" placeholder="Email Address" id="email">
            <input type="password" placeholder="Password" id="password">
            <button type="submit"  class="btn btn-dark">Đăng ký</button>
            <a href="/#/signin" class="btn-login btn-fade">Already have an account, Sign In <i
                    class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </form>
        </div>

            
</div>

    `

    },
     afterRender() {
        const formRegister = document.querySelector("#formRegister");
        formRegister.addEventListener('submit',function(e){
            e.preventDefault();
         
            const user= {
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value,
            };
            axios.post('http://localhost:3000/users',user);
        });
    }



}
export default signup;