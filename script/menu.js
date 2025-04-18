const section = document.getElementById('button-sesion')
const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
const userJson = JSON.parse(user)
const expiresIn = localStorage.getItem("expiresIn");
let menu = false;

document.getElementById("menu").addEventListener("click", function () {
    if (menu) {
        document.getElementById("menu").classList.remove("bx-menu");
        document.getElementById("menu").classList.add("bx-x");
        document.getElementById("navMenu").classList.remove("top-[-900%]");
        document.getElementById("navMenu").classList.add("top-8");
        menu = false;
    } else {
        document.getElementById("menu").classList.remove("bx-x");
        document.getElementById("menu").classList.add("bx-menu");
        document.getElementById("navMenu").classList.remove("top-8");
        document.getElementById("navMenu").classList.add("top-[-900%]");
        menu = true;
    }
})

//si se preciona una etiqueta a se cierra
document.querySelectorAll('a').forEach((element) => {
    element.addEventListener('click', () => {
        document.getElementById("menu").classList.remove("bx-x");
        document.getElementById("menu").classList.add("bx-menu");
        document.getElementById("navMenu").classList.remove("top-8");
        document.getElementById("navMenu").classList.add("top-[-900%]");
        menu = true;
    })
})


// traer datos de localstorage

//eliminar token y user de local storage segun expiresIn
console.log(userJson)
if (expiresIn && Date.now() > parseInt(expiresIn)) {
    console.log("La sesión ha expirado");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    console.log('Entraste al if')
} else {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log('Entraste al else')
    console.log("Usuario aún válido:", user);
}

if (userJson && token) {
    console.log("entro en user")
    section.innerHTML = `
                  <a href="../pages/user.html" class=" flex justify-center items-center  text-principal gap-2 shadow-xs shadow-principal px-2 py-1 rounded-xl cursor-pointer border-1 hover:text-gray-300">
                <img class=" w-5 h-5  rounded-full" src=${userJson.imageUrl} alt="userImage">
                <span class=" md:text-md text-xs">${userJson.first_name
                }</span>
               </a>
    `
} else {
    console.log("no hay user")
    section.innerHTML = `<a href="../pages/loginOption.html" class="text-principal bg-[#447C38] hover:bg-green-500 md:text-lg text-sm font-bold px-2 py-1 rounded-2xl" >Iniciar Sesion</a>`
}


