import axios from "axios";

const ax = axios.create({
    baseURL: "http://localhost/api"
})

export const getQuotes = (page) => {
    return ax.get('quotes', {
        params: {
            page
        }
    })
}

export const QuoteById = (id) => {
    return ax.get('quotes/' + id)
}

export const createOrUpdateQuotes = (data) => {
    return ax.post('quotes', data)
}
