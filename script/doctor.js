import { appointmentForm } from "./modules/appointmentForm.js";
import { getData } from "./modules/getData.js";
import { protectedRouterUser } from "./modules/protectedRouter.js";
async function getDoctors() {
    const url = "https://back-virtual-pet-api.onrender.com/doctor";
    const divDoctor = document.getElementById('divDoctor');
    const response = await getData(url);


    divDoctor.innerHTML = '';
    response.forEach(doctor => {
        const { id, firstName, lastName, imageUrl } = doctor;

        divDoctor.innerHTML += `
        
        <div id="${id}" class="border w-full max-w-[230px] bg-coffeeGray rounded-2xl overflow-hidden shadow">
                <div class="w-full h-30 overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="${imageUrl}"
                        alt="image" />
                </div>
                <div class="px-2 flex flex-col justify-center py-2 gap-2">
                    <h2 class="text-center text-sm text-principal font-bold">
                        ${firstName} ${lastName}
                    </h2>
                    <button id="btnDoctor" data-index=${id} type="button" class="bg-green-600 hover:bg-green-500 text-principal px-2 rounded-2xl shadow cursor-pointer">
                        Agendar cita
                    </button>
                </div>
            </div>
        
        `;
    })
    document.querySelectorAll('#btnDoctor').forEach(button => {

        button.addEventListener('click', (e) => {
            e.preventDefault()
            const id = e.target.getAttribute('data-index')
            const modal = document.getElementById('modalCita')
            localStorage.setItem("idDoctor", JSON.stringify(id))
            modal.classList.add('flex')
            modal.classList.remove('hidden')
        })
    })


}



protectedRouterUser()
getDoctors()
appointmentForm()


