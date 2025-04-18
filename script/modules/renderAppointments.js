export const renderAppointments = (data) => {
    const appointments = document.getElementById("divCitasAgg")
    appointments.innerHTML = ''
    data.forEach(element => {
        const { doctor, petName, petGender, date, time, petHistory } = element
        appointments.innerHTML += `
           <div class=" w-full flex justify-between shadow px-2 rounded-2xl overflow-hidden  mt-3 [&>div]:w-full [&>div]:text-center [&>div]:py-2 [&>div>div]:rounded-2xl [&>div>div]:w-full [&>div>div]:overflow-hidden [&>div>h2]:font-bold [&>div>h2]:text-[9px] [&>div>span]:text-[9px] [&>div>button]:text-[9px]  [&>div>h2]:sm:text-sm [&>div>span]:sm:text-sm [&>div>button]:sm:text-sm [&>div>button]:cursor-pointer">
                <div >
                    <h2>Medico</h2>

                    <span>${doctor.firstName} ${doctor.lastName}</span>

                </div>

                <div>
                    <h2>Mascota</h2>
                    <span>${petName}</span>
                </div>
                <div>
                    <h2>Genero</h2>
                    <span>${petGender}</span>
                </div>
                <div>
                    <h2>Fecha cita</h2>
                    <span>${date}</span>
                </div>
                <div>
                    <h2>
                    Hora cita
                    </h2>
                    <span>${time}</span>
                </div>
                <div class="flex flex-col justify-baseline">
                    <h2>Historial clinico</h2>
                    <button id="btnModalVer" class=" bg-yellow-300 hover:bg-yellow-400 w-full rounded-2xl font-semibold shadow">Ver</button>
                </div>

            </div>

    `

        const parrafoModal = document.getElementById("parrafoModal")


        document.querySelectorAll("#btnModalVer").forEach((element, index) => {
            element.addEventListener("click", () => {
                const modalHistory = document.getElementById("modalHistory")
                modalHistory.classList.remove("hidden")
                modalHistory.classList.add("flex")
                parrafoModal.textContent = data[index].petHistory
            })
        })
        document.getElementById("closeHistory").addEventListener("click", () => {
            const modalHistory = document.getElementById("modalHistory")
            modalHistory.classList.remove("flex")
            modalHistory.classList.add("hidden")
        })
    })
}



export const renderAppointmentsDoc = (data) => {
    const appointments = document.getElementById("divCitasAgg")
    appointments.innerHTML = ''
    data.forEach(element => {
        const { id, user, petName, petGender, date, time } = element
        appointments.innerHTML += `
           <div class=" w-full flex justify-between shadow px-2 rounded-2xl overflow-hidden  mt-3 [&>div]:w-full [&>div]:text-center [&>div]:py-2 [&>div>div]:rounded-2xl [&>div>div]:w-full [&>div>div]:overflow-hidden [&>div>h2]:font-bold [&>div>h2]:text-[9px] [&>div>span]:text-[9px] [&>div>button]:text-[9px]  [&>div>h2]:sm:text-sm [&>div>span]:sm:text-sm [&>div>button]:sm:text-sm [&>div>button]:cursor-pointer">
                <div >
                    <h2>Pasiente</h2>

                    <span>${user.first_name} ${user.last_name}</span>

                </div>

                <div>
                    <h2>Mascota</h2>
                    <span>${petName}</span>
                </div>
                <div>
                    <h2>Genero</h2>
                    <span>${petGender}</span>
                </div>
                <div>
                    <h2>Fecha cita</h2>
                    <span>${date}</span>
                </div>
                <div>
                    <h2>
                    Hora cita
                    </h2>
                    <span>${time}</span>
                </div>
                <div class="flex flex-col justify-baseline">
                    <h2>Historial clinico</h2>
                    <div class=" space-y-2 [&>button]:text-center ">
                        <button id="btnModalVer" data-index=${id} class=" bg-yellow-300 hover:bg-yellow-400 w-full rounded-2xl font-semibold shadow"> 
                    <i class='bx bx-edit text-2xl font-semibold'></i></button>
                    <button id="btnModalVerH" data-index=${id} class=" bg-green-500 hover:bg-green-700 w-full rounded-2xl font-semibold shadow">
                    <i class='bx bx-detail text-2xl font-semibold'></i></button>
                    </div>
                </div>

            </div>

    `

        const textArea = document.getElementById("textAreaH")
        const textAreav = document.getElementById("textAreaHV")

        // document.querySelectorAll("#btnModalVer").addEventListener("click", ()=>{
        //     const modalHistory = document.getElementById("modalHistory")
        //     modalHistory.classList.remove("hidden")
        //     modalHistory.classList.add("block")
        //     parrafoModal.textContent =  petHistory


        // })
        document.querySelectorAll("#btnModalVerH").forEach((element, index) => {

            element.addEventListener("click", () => {
                console.log(data)
                console.log(element)
                const modalHistory = document.getElementById("modalHistoryV")
                modalHistory.classList.remove("hidden")
                modalHistory.classList.add("flex")
                // hacer quel text area tenga el valor del historial clinico
                console.log(data[index].petHistory)
                textAreav.value = data[index].petHistory
                //que no sea editable
                textAreav.disabled = true
            })

            console.log(element)
        })


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        document.querySelectorAll("#btnModalVer").forEach((element, index) => {

            element.addEventListener("click", (e) => {
                e.preventDefault()
                console.log(e)
                const id = element.getAttribute('data-index')
                console.log(id)
                const modalHistory = document.getElementById("modalHistory")
                localStorage.setItem("idCita", JSON.stringify(id))
                modalHistory.classList.remove("hidden")
                modalHistory.classList.add("flex")
                textArea.placeholder = data[index].petHistory
            })

            console.log(element)
        })
        document.getElementById("closeHistory").addEventListener("click", () => {
            const modalHistory = document.getElementById("modalHistory")
            modalHistory.classList.remove("flex")
            modalHistory.classList.add("hidden")
        })
    })
}


export const renderCotact = (data) => {
    const appointments = document.getElementById("divCitasAgg")
    appointments.innerHTML = ''
    data.forEach(element => {
        const { name, email } = element
        appointments.innerHTML += `
           <div class=" w-full flex justify-between shadow px-2 rounded-2xl overflow-hidden  mt-3 [&>div]:w-full [&>div]:text-center [&>div]:py-2 [&>div>div]:rounded-2xl [&>div>div]:w-full [&>div>div]:overflow-hidden [&>div>h2]:font-bold [&>div>h2]:text-[9px] [&>div>span]:text-[9px] [&>div>button]:text-[9px]  [&>div>h2]:sm:text-sm [&>div>span]:sm:text-sm [&>div>button]:sm:text-sm [&>div>button]:cursor-pointer">
                <div >
                    <h2>Nombre</h2>

                    <span>${name}</span>

                </div>

                <div>
                    <h2>Correo</h2>
                    <span>${email}</span>
                </div>
                <div>
                    <h2>Descripcion</h2>
                    <button id="btnModalVer" class=" bg-green-500 hover:bg-green-700 w-full rounded-2xl font-semibold shadow"><i class='bx bx-detail text-2xl font-semibold'></i></button>
                </div>
                
                
                

            </div>

    `

        const textArea = document.getElementById("textAreaC")
        document.querySelectorAll("#btnModalVer").forEach((element, index) => {

            element.addEventListener("click", (e) => {
                e.preventDefault()
                console.log( data[index].message)
                const modalHistory = document.getElementById("modalContactV")
                modalHistory.classList.remove("hidden")
                modalHistory.classList.add("flex")
                textArea.placeholder = data[index].message
                textArea.disabled = true
            })

            console.log(element)
        })
        document.getElementById("closeContact").addEventListener("click", () => {
            const modalHistory = document.getElementById("modalContactV")
            modalHistory.classList.remove("flex")
            modalHistory.classList.add("hidden")
        })

    })
}