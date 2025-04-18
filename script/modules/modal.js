export const modalError =(text)=>{
    const textModal = document.getElementById('textModal')
    const imgModal = document.getElementById('imgModal')
    const modalError = document.getElementById('modalError')
    const btnModal = document.getElementById('btnModal')    
    const arrImgModal = ['../../img/perroTriste.jpeg', '../../img/gatoTriste.jpeg']
    if(text){
        textModal.textContent = text
        imgModal.src = arrImgModal[Math.floor(Math.random() * arrImgModal.length)]
        modalError.classList.remove('hidden')
        modalError.classList.add('block')
    }else{
        modalError.classList.remove('block')
        modalError.classList.add('hidden')
    }

    btnModal.addEventListener('click', ()=>{
        modalError.classList.remove('block')
        modalError.classList.add('hidden')
    })
}



export const modalSuccess =(text)=>{
    const textModal = document.getElementById('textModal')
    const imgModal = document.getElementById('imgModal')
    const modalSuccess = document.getElementById('modalSuccess')
    const btnModal = document.getElementById('btnModal')
    const arrImgModal = ['../../img/perroFeliz.jpeg', '../../img/gatoFeliz.jpeg']
    if(text){
        textModal.textContent = text
        imgModal.src = arrImgModal[Math.floor(Math.random() * arrImgModal.length)]
        modalSuccess.classList.remove('hidden')
        modalSuccess.classList.add('block')
    }else{
        modalSuccess.classList.remove('block')
        modalSuccess.classList.add('hidden')
    }

    btnModal.addEventListener('click', ()=>{
        modalSuccess.classList.remove('block')
        modalSuccess.classList.add('hidden')
    })
}

export const modalAuthErro=(text)=>{
    const textModal = document.getElementById('textModal')
    const imgModal = document.getElementById('imgModal')
    const modalAuthError = document.getElementById('modal')
    const btnModal = document.getElementById('btnModal')
    const arrImgModal = ['../../img/perroTriste.jpeg', '../../img/gatoTriste.jpeg']
    if(text){
        textModal.textContent = text
        imgModal.src = arrImgModal[Math.floor(Math.random() * arrImgModal.length)]
        modalAuthError.classList.remove('hidden')
        modalAuthError.classList.add('block')
    }else{
        modalAuthError.classList.remove('block')
        modalAuthError.classList.add('hidden')
    }

    btnModal.addEventListener('click', ()=>{
        modalAuthError.classList.remove('block')
        modalAuthError.classList.add('hidden')
    })
}