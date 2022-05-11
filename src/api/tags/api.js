import axios from "axios";

const ax = axios.create({
    baseURL: "http://185.195.69.130:81/api"
})

export const getTags = () => {
    return ax.get('tags')
}