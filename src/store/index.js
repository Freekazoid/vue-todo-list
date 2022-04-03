import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 0, done: false, title: 'test task 1', context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 1, done: true,  title: 'test task 2', context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 2, done: false, title: 'test task 3', context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 3, done: false, title: 'test task 4', context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 4, done: true,  title: 'test task 5', context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 5, done: false,  title: 'test task 6', context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ],
    filterTask: [],
    taskCount: 0,
    activeTask: 0,
    completedTask: 0,
  },
  actions: {
    newTodo({commit}, value){
      commit('newTodo', value);
    },
    toggleTodo({ commit }, index) {
      commit('toggleTodo', index);
    },
    clearTodo({ commit }){
      commit('clearTodo');
    },
    clearAll({commit}){
      commit('clearAll')
    },
    filterTasks({commit}, filter){
      commit('filterTasks', filter)
    }
  },
  mutations: {
    newTodo(state, value){
      state.todos.push({ 
        id: state.todos.length, 
        done: false, 
        title: value, 
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
      })
    },
    clearTodo(state){
      state.todos = state.todos.filter(item => !item.done)
    },
    clearAll(state){
      state.todos = []
    },
    toggleTodo(state, index) {
      state.todos[index].done = !state.todos[index].done;
    },
    filterTasks(state, filter){
      state.filterTask = state.todos.filter(item => (filter == 'active' && !item.done) ? item : (filter == 'completed' && item.done) ? item : false)
    },
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    }
  },
  getters: {
    // // todos: ({ todos }) => todos,
    filterTask: ({ filterTask, todos }) => filterTask.length <= 0 ? todos : filterTask,
    taskCount: ({ todos }) => todos.length,
    completedTask:({ todos }) => todos.filter(item => item.done).length,
    activeTask: ({ todos }) => todos.filter(item => !item.done).length,
  }
})
store.subscribe((mutation, state) => localStorage.setItem('store', JSON.stringify(state)));


export default store;