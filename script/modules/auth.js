export const createUser = async (url,data) =>{
    delete data.passwordConfirm
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
        
    } catch (error) {
       return error
        
    } finally {
        console.log('End of request')
    }

}


export const loginUser = async (url, data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data) 
        return data
    } catch (error) {
        console.log(error)
        return error
        

    } finally {
        console.log('End of request')
    }

}

export const createAppointment = async (url, data) =>{
    const TOKEN = localStorage.getItem('token')
    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${TOKEN}`,
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return error


    } finally {
        console.log('End of request')
    }

}



export const createContact = async (url,data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
        
    } catch (error) {
        return error
    } finally {
        console.log('End of request')
    }
    
}
    