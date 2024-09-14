import axios from "axios";
const axiosInstance=axios.create({
    baseURL:"https://flux-club-backend.vercel.app/api"
})
export {axiosInstance};