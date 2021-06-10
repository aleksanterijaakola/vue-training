const state = {
  items: []
}

const getters = {
  completedCount: state => state.items.filter(item => item.completed).length
}

const mutations = {
  add: (state, name) => state.items.push({ name, completed: false }),
  complete: (state, task) => {
    const taskIndex = state.items.indexOf(task)
    const item = state.items[taskIndex]
    item.completed = !item.completed
  },
  delete: (state, task) => {
    const taskIndex = state.items.indexOf(task)
    state.items.splice(taskIndex, 1)
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
