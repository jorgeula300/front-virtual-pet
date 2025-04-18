import { edit } from "../modules/eidt.js";
import { getData } from "../modules/getData.js";
import { protectedRouterDoctor } from "../modules/protectedRouter.js";
import { renderAppointmentsDoc } from "../modules/renderAppointments.js";
import { colseUser } from "./closeUser.js";
import { menuD } from "./menuD.js";
async function appointment() {
    const url = "https://back-virtual-pet-api.onrender.com/appointment/doctor"
    const getAppointment = await getData(url)
    //mostrar citas desde la ultima agendadada
    const appointments = getAppointment.reverse()
    console.log(appointments)
    renderAppointmentsDoc(appointments)

    document.querySelector("form").addEventListener("submit", async (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        const id = Number(JSON.parse(localStorage.getItem("idCita")))
        const url = `https://back-virtual-pet-api.onrender.com/appointment/${id}`
        const response = await edit(url, data)
        if(typeof response == "object"){
            window.location.reload()
        } else {
            alert("Error al mandar los datos")
        }
        document.querySelector("form").reset()
    })
}

protectedRouterDoctor()
menuD()
colseUser()

appointment()