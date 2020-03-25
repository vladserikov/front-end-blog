import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null;

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const blogs = await axios.get(baseUrl)
    return blogs.data
}

const createBlog = async (obj) => {
    const config = {
        headers: { Authorization: token}
    }
    const result = await axios.post(baseUrl, obj, config)
    return result.data
}

const update = async (id, obj) => {
    const returnUpdate = await axios.put(`${baseUrl}/${id}`, obj)
    return returnUpdate.data
}

export default {
    getAll, setToken, createBlog, update
}