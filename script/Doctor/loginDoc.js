import { loginUser } from "../modules/auth.js";
import { modalAuthErro} from "../modules/modal.js";

document.querySelector("form").addEventListener("submit",async e =>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    const url = "https://back-virtual-pet-api.onrender.com/doctor/login"
    const response = await loginUser(url, data)
    console.log(response)
    if(response.token && response.doctor){
        localStorage.setItem("token", response.token)
        localStorage.setItem("doctor", JSON.stringify(response.doctor))
        localStorage.setItem("expiresIn", Date.now() + 3600000) 
        document.querySelector("form").reset()
        window.location.href = "../../pages/Doctor/homeDoc.html"
    }else{
        modalAuthErro(response.message)
    }

})