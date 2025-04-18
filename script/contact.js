import { createContact } from "./modules/auth.js"

document.querySelector("form").addEventListener("submit",async e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const url = 'https://back-virtual-pet-api.onrender.com/contact'
    const response = await createContact(url, data)
    console.log(response)
    // si response es un objeto true, si no false
    if (typeof response === 'object') {
        alert('Mensaje enviado correctamente')
        document.querySelector("form").reset()
    } else {
        alert('Error al enviar el mensaje')
    }



    })