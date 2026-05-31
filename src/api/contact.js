import api from "."

export const postContacts = async (body) => {
    const response = await api.post("/message1", body)
    return response.data
}