export const menuD =()=>{
    const h2 = document.getElementById("titleD")
    const img = document.getElementById("imgD")
    const doctor = localStorage.getItem("doctor")
    const {firstName, lastName, imageUrl} = JSON.parse(doctor)
    h2.textContent = `${firstName} ${lastName}`
    img.src = imageUrl
}

