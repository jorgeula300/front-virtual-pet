export const getData = async (url) => {
    try {
        const TOKEN = localStorage.getItem('token')
        const options = {
            method: 'Get',
            headers: {
                "Authorization": `Bearer ${TOKEN}`,
                'Content-type': 'application/json; charset=UTF-8'
            }}
        const response = await fetch(url, options)
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error)
    }
    finally {
        console.log('finalizo la peticion')
    }
} 