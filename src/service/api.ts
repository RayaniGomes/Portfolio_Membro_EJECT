import axios from "axios";

const api = axios.create({
    baseURL: 'https://crude-portfolio-eject.onrender.com/',
})

export default api