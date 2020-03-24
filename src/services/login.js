import axios from 'axios'
const baseUrl = '/api/login'

const login = async (data) => {
    const returnUser = await axios.post(baseUrl, data)
    return returnUser.data
}

export default {
    login
}