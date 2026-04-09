import axios from "axios";

const api = axios.create({
    baseURL: "https://698e6503aded595c2531c0eb.mockapi.io/api/"
})

export default api;