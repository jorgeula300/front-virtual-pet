

const user = document.getElementById("user")
const doctor = document.getElementById("doctor")

user.addEventListener("click", () => {
    window.location.href = "../pages/login.html"
})

doctor.addEventListener("click", () => {
    window.location.href = "../pages/Doctor/login.html"
})

