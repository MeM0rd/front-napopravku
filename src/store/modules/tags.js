import {getTags} from "@/api/tags/api";

export default {
    state: {
        tags: []
    },
    getters: {
        tags(state) {
            return state.tags
        }
    },
    mutations: {
        setTags(state, data) {
            state.tags = data
        }
    },
    actions: {
        getTags({commit}) {
            getTags().then((response) => {
                const data = response.data;
                commit('setTags', data)
            })
        }
    }
}