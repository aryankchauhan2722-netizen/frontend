import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export const getProjects = () => API.get('/projects')

export const getAchievement = () => API.get('/achievements')

export const sendContact = (data) => API.post('/contact', data)

export const getSettings = () => API.get('/settings')

export const sendChatMessage = (message) => {
    return axios.post('http://localhost:5001/chat' , {message})
}