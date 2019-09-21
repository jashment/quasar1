const state = {
    tasks: {
        
    }

    // tasks: [
    //     {
    //       id: 1,
    //       name: "Go to shop",
    //       completed: false,
    //       dueDate: "10/27/2019",
    //       dueTime: "18:30"
    //     },
    //     {
    //       id: 2,
    //       name: "Get Bananas",
    //       completed: false,
    //       dueDate: "10/26/2019",
    //       dueTime: "17:30"
    //     },
    //     {
    //       id: 3,
    //       name: "Get apples",
    //       completed: false,
    //       dueDate: "10/25/2019",
    //       dueTime: "16:30"
    //     }
    //   ]
}

const mutations = {

}

const actions = {

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