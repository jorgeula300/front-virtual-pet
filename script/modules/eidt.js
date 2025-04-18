export const edit = async (url,data) =>{
    const Token = localStorage.getItem('token')
        const options = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${Token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error)
        
    }
}