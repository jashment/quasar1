import Vue from 'vue'


const state = {
    tasks: {
        'ID1': {
            name: "Go to shop",
            completed: false,
            dueDate: "10/27/2019",
            dueTime: "18:30"
        },
        'ID2': {
            name: "Get Bananas",
            completed: false,
            dueDate: "10/26/2019",
            dueTime: "17:30"
        },
        'ID3': {
            name: "Get apples",
            completed: false,
            dueDate: "10/25/2019",
            dueTime: "16:30"
        },
    }

}

const mutations = {
    updateTask(state, payload){
        Object.assign(state.tasks[payload.id],payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)
    }
}

const actions = {
    updateTask({commit}, payload) {
        commit('updateTask', payload)
    },
    deleteTask({commit}, id) {
        commit('deleteTask', id)
    }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}