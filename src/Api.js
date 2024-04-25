import axios from "axios";





const api = axios.create({
    baseURL: 'https://66239b3e3e17a3ac846fab6d.mockapi.io/campers'
})

export const getAllCampersApi = async () => {
    const { data } = await api(`/`)
    return data
}



export const getSingleCamperApi = async (id) => {
    const { data } = await api(`/${id}`)
    return data
}



