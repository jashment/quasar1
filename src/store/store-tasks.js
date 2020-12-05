import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    ID1: {
      name: 'Go to shop',
      completed: false,
      dueDate: '10/27/2019',
      dueTime: '18:30'
    },
    ID2: {
      name: 'Get Bananas',
      completed: false,
      dueDate: '10/26/2019',
      dueTime: '17:30'
    },
    ID3: {
      name: 'Get apples',
      completed: false,
      dueDate: '10/25/2019',
      dueTime: '16:30'
    },
    ID4: {
      name: 'Go to shop',
      completed: false,
      dueDate: '10/27/2019',
      dueTime: '18:30'
    },
    ID5: {
      name: 'Get Bananas',
      completed: false,
      dueDate: '10/26/2019',
      dueTime: '17:30'
    },
    ID6: {
      name: 'Get apples',
      completed: false,
      dueDate: '10/25/2019',
      dueTime: '16:30'
    },
        ID7: {
      name: 'Go to shop',
      completed: false,
      dueDate: '10/27/2019',
      dueTime: '18:30'
    },
    ID8: {
      name: 'Get Bananas',
      completed: false,
      dueDate: '10/26/2019',
      dueTime: '17:30'
    },
    ID9: {
      name: 'Get apples',
      completed: false,
      dueDate: '10/25/2019',
      dueTime: '16:30'
    },
        ID10: {
      name: 'Go to shop',
      completed: false,
      dueDate: '10/27/2019',
      dueTime: '18:30'
    },
    ID11: {
      name: 'Get Bananas',
      completed: false,
      dueDate: '10/26/2019',
      dueTime: '17:30'
    },
    ID12: {
      name: 'Get apples',
      completed: false,
      dueDate: '10/25/2019',
      dueTime: '16:30'
    }

  },
  search: '',
  sort: 'name'
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
  },
  setSearch(state, value) {
    state.search = value
  },
  setSort(state, value) {
    state.sort = value
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
  },
  setSearch({ commit }, value) {
    commit('setSearch', value)
  },
  setSort({ commit }, value) {
    commit('setSort', value)
  }
}

const getters = {
  tasksSorted: state => {
    let tasksSorted = {}
    let keysOrdered = Object.keys(state.tasks)
    keysOrdered.sort((key1, key2) => {
      let taskAProp = state.tasks[key1][state.sort].toLowerCase()
      let taskBProp = state.tasks[key2][state.sort].toLowerCase()
      if (taskAProp > taskBProp) {
        return 1
      } else if (taskAProp < taskBProp) {
        return -1
      } else {
        return 0
      }
    })
    
    keysOrdered.forEach(key => {
      tasksSorted[key] = state.tasks[key]
    })
    
    return tasksSorted
  },
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted
    let tasksFiltered = {}
    if (state.search) {
      Object.keys(tasksSorted).forEach(function (key) {
        let task = tasksSorted[key],
          taskNameLowercase = task.name.toLowerCase(),
          searchLowercase = state.search.toLowerCase()
        if (taskNameLowercase.includes(searchLowercase)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return tasksSorted
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key]
      if (!task.completed) {
        tasks[key] = task
      }
    });
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key]
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
