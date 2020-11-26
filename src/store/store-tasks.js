import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    // ID1: {
    //   name: 'Go to shop',
    //   completed: false,
    //   dueDate: '10/27/2019',
    //   dueTime: '18:30'
    // },
    // ID2: {
    //   name: 'Get Bananas',
    //   completed: false,
    //   dueDate: '10/26/2019',
    //   dueTime: '17:30'
    // },
    // ID3: {
    //   name: 'Get apples',
    //   completed: false,
    //   dueDate: '10/25/2019',
    //   dueTime: '16:30'
    // }
  },
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasksTodo: state => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function(key) {
      let task = state.tasks[key]
      if (!task.completed) {
        tasks[key] = task
      }
    });
    return tasks
  },
  tasksCompleted: state => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function(key) {
      let task = state.tasks[key]
      if (task.completed) {
        tasks[key] = task
      }
    });
    return tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
