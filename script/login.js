import { loginUser } from "./modules/auth.js";
import { modalAuthErro} from "./modules/modal.js";

document.querySelector("form").addEventListener("submit",async e =>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    const url = "https://back-virtual-pet-api.onrender.com/login"
    const response = await loginUser(url, data)
    console.log(typeof response)
    if(response.token && response.user){
        localStorage.setItem("token", response.token)
        localStorage.setItem("user", JSON.stringify(response.user))
        localStorage.setItem("expiresIn", Date.now() + 3600000) 
        document.querySelector("form").reset()
        window.location.href = "../index.html"
    }else{
        modalAuthErro(response.message)
    }

})
