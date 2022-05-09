import axios from "axios";
const ax = axios.create({
    baseURL: "http://localhost/api"
})

export const getTags = () => {
    return ax.get('tags')
}