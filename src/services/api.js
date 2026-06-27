import axios from 'axios'

const API = axios.create({
    baseURL: 'https://aryanportfolio-backend.onrender.com/api'
})

export const getProjects = () => API.get('/projects')

export const getAchievement = () => API.get('/achievements')

export const sendContact = (data) => API.post('/contact', data)

export const getSettings = () => API.get('/settings')

export const sendChatMessage = (message) => {
    return axios.post('https://aryanportfolio-chatbot-backend.onrender.com/chat' , {message})
}