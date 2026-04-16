import api from "./"

export const getProducts = async () => {
    const response = await api.get("/products")
    return response.data
}

export const postProducts = async (product) => {
    const response = await api.post("/products", product)
    return response.data
}