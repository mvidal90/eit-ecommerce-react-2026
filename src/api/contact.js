import api from "."

export const postContacts = async (body) => {
    const response = await api.post("/contact", body)
    return response.data
}