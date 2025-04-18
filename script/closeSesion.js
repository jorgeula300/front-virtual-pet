import { protectedRouterUser } from "./modules/protectedRouter.js"

const close = ()=>{
   
    const closeD = document.getElementById("closeD")
    const user = localStorage.getItem("user")

    closeD.innerHTML=`
      <div class="w-full max-w-60 h-60 rounded-2xl  flex flex-col items-center overflow-hidden shadow">
            <div class="w-full h-40 overflow-hidden bg-cover">
                <img class="w-full h-full object-cover"
                    src=${JSON.parse(user).imageUrl}
                    alt="user" />
            </div>
            <div class="px-2 py-2 text-sm flex flex-col gap-y-2">
                <h2>Nombre:</h2>
                <span>${JSON.parse(user).first_name + " " + JSON.parse(user).last_name }</span>
                <h2>Correo:</h2>
                <span>${JSON.parse(user).email}</span>
                <button id="close"
                    class="w-full bg-red-500 text-principal hover:bg-red-700 rounded-2xl px-3 py-1 cursor-pointer transition">
                    Cerrar Sesion
                </button>
            </div>
        </div>
    `

const close = document.getElementById("close")
close.addEventListener("click", () => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")
    const doctor = localStorage.getItem("doctor")
    if(token && user){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location.href = "../../pages/login.html"
    }else if(token && doctor){
        localStorage.removeItem("token")
        localStorage.removeItem("doctor")
        window.location.href = "../../pages/login.html"
    }
})
}

protectedRouterUser()
close()