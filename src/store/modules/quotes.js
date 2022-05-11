import {getQuotes, QuoteById} from "@/api/quotes/api";

export default {
    state: {
        quotes: [],
        quoteById: []
    },
    getters: {
        list(state) {
            return state.quotes
        },
        quoteById(state) {
            return state.quoteById
        }
    },
    mutations: {
        SET_LIST(state, list) {
            state.quotes = list;
        },
        SET_CURRENT_PAGE(state, pNumber) {
            state.quotes.current_page = pNumber;
        },
        SET_QUOTE_BY_ID(state, quoteById) {
            state.quoteById = quoteById;
        }
    },
    actions: {
        GET_LIST({commit}, pNumber) {
            getQuotes(pNumber).then((response) => {
                const list = response.data;
                commit('SET_LIST', list)
            })
        },
        QUOTE_BY_ID({commit}, id) {
            QuoteById(id).then((response) => {
                const quoteById = response.data;
                commit('SET_QUOTE_BY_ID', quoteById)
            })
        }
    }
}