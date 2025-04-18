export const protectedRouterUser = ()=>{
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")
    if(token && user){
        return true
    }else{
        window.location.href = "../../pages/login.html"
    }
}


export const protectedRouterDoctor = ()=>{
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("doctor")
    if(token && user){
        return true
    }else{
        window.location.href = "../../pages/Doctor/login.html"
    }
}