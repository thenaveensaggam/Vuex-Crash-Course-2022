import axios from "axios";

export default {
    namespaced: true,
    state: {
        userList: {
            loading: false,
            users: [],
            errorMessage: null
        }
    },
    mutations: {
        GET_USERS_REQUEST: function (state) {
            state.userList.loading = true;
        },
        GET_USERS_SUCCESS: function (state, payload) {
            state.userList.loading = false;
            state.userList.users = payload.users;
        },
        GET_USERS_FAILED: function (state, payload) {
            state.userList.loading = false;
            state.userList.errorMessage = payload.error
        }
    },
    actions: {
        getUsers: async function ({commit}) {
            try {
                commit("GET_USERS_REQUEST");
                let dataURL = `https://jsonplaceholder.typicode.com/users`;
                let response = await axios.get(dataURL);
                commit("GET_USERS_SUCCESS", {users: response.data});
            } catch (error) {
                commit("GET_USERS_FAILED", {error: error});
            }
        }
    }
}
