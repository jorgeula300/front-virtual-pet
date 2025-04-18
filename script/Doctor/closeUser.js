export const colseUser = ()=>{
    const closeD = document.getElementById("closeD")
    closeD.addEventListener("click", ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("doctor")
        window.location.href = "../../pages/Doctor/login.html"
    })
}