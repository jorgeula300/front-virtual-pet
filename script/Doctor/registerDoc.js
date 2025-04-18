import { createUser } from "../modules/auth.js";
import { modalAuthErro } from "../modules/modal.js";

document.querySelector("form").addEventListener("submit",async e =>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    if(data.password !== data.passwordConfirm){
        modalAuthErro("Las contraseñas no coinciden")
        return
    }else if(data.password.length < 6){
        modalAuthErro("La contraseña debe tener al menos 6 caracteres")
        return
    }else if(data.password.length > 20){
        modalAuthErro("La contraseña debe tener menos de 20 caracteres")
        return
    }else if(data.password.search(/[a-z]/) < 0){
        modalAuthErro("La contraseña debe tener al menos una letra minúscula")
        return
    }else if(data.password.search(/[A-Z]/) < 0){
        modalAuthErro("La contraseña debe tener al menos una letra mayúscula")
        return
    }else if(data.password.search(/[0-9]/) < 0){
        modalAuthErro("La contraseña debe tener al menos un número")
        return
    }else if(data.password.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) < 0){
        modalAuthErro("La contraseña debe tener al menos un caracter especial")
        return
    }
    const url = "https://back-virtual-pet-api.onrender.com/doctor"
    const response = await createUser(url, data);
    if(response.message){
        modalAuthErro(response.message)
        return
    }
    document.querySelector("form").reset()
    window.location.href = "../../pages/Doctor/login.html"
})
