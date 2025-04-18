import { getData } from "../modules/getData.js";
import { protectedRouterDoctor } from "../modules/protectedRouter.js";
import {  renderCotact } from "../modules/renderAppointments.js";
import { colseUser } from "./closeUser.js";
import { menuD } from "./menuD.js";
async function appointment() {
    const url = "https://back-virtual-pet-api.onrender.com/contact"
    const getAppointment = await getData(url)
    //mostrar citas desde la ultima agendadada
    const appointments = getAppointment.reverse()
    console.log(appointments)
    renderCotact(appointments)


}

protectedRouterDoctor()
menuD()
colseUser()
appointment()