import { createAppointment } from "./auth.js";
import { getData } from "./getData.js";
import { modalSuccess,modalError } from "./modal.js";

export const appointmentForm = async () => {
    const closeModal = document.getElementById('closeModal')
    const modal = document.getElementById('modalCita')
    const inputDate = document.getElementById('inputDate')
    const today = new Date().toISOString().split("T")[0];
    const doctorId = Number(JSON.parse(localStorage.getItem("idDoctor")))
    const url = 'https://back-virtual-pet-api.onrender.com/appointment'

    const citas = await getData(url)
    
    

    inputDate.addEventListener('change', () => {
        const fecha = inputDate.value
    
        const agendaDoctor = citas.filter(cita => cita.doctorId === doctorId && cita.date === fecha  )


        document.querySelectorAll("#timeDoctor").forEach(time => {
            const cita = agendaDoctor.find(cita => cita.time === time.value)
            
            console.log(agendaDoctor, cita, time.value)
            cita ? time.classList.add('hidden') : time.classList.remove('hidden')
        })
        console.log(agendaDoctor)
    })

    


    inputDate.setAttribute('min', today)
    closeModal.addEventListener('click', () => {
        modal.classList.remove('flex')
        modal.classList.add('hidden')
    })

    document.querySelector("form").addEventListener("submit", async e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        data.doctorId = JSON.parse(localStorage.getItem("idDoctor"))
        console.log(data)

        const postAppointment = await createAppointment(url, data)
        console.log(postAppointment)
        document.querySelector("form").reset()
        //si es un objeto la cita se creo de lo contrario error 
        if (typeof postAppointment === 'object') {
            modal.classList.remove('flex')
            modal.classList.add('hidden')
            window.location.href= '../../pages/appointment.html'
        } else {
            modal.classList.remove('flex')
            modal.classList.add('hidden')
            modalError('Error al agendar la cita')
        }
    
    })


    console.log('appointment')
}