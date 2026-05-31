import api from "./"

export const getProducts = async (page) => {
    const response = await api.get(`/products?limit=12&pageNumber=${page}`)
    return response.data
}

export const postProducts = async (product) => {
    const response = await api.post("/products", product)
    return response.data
}