import { getData } from "./modules/getData.js";
import { protectedRouterUser } from "./modules/protectedRouter.js";
import { renderAppointments } from "./modules/renderAppointments.js";
async function appointment() {
    const url = "https://back-virtual-pet-api.onrender.com/appointment/user"
    const getAppointment = await getData(url)
    //mostrar citas desde la ultima agendadada
    const appointments = getAppointment.reverse()
    console.log(appointments)
    renderAppointments(appointments)
}

protectedRouterUser()

appointment()
