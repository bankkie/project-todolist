import Vue from "vue";
import Vuex from "vuex";
import UserProvider from "../resources/user_provider";
const userService = new UserProvider();

Vue.use(Vuex);

const modules = {};

const state = {
  todolists: [],
  selectTodolist: {}
};

const actions = {
  async getTodoLists({ commit }) {
    const data = await userService.getTodoLists();
    commit("SET_TODOLIST", data);
  },
  // get data from API
  getTodoListInStore({ commit }) {
    const data = this.state.todolists;
    commit("SET_TODOLIST", data);
  },
  // save data
  addTodo({ commit }, todo) {
    commit("ADD_TODOLIST", todo);
  },
  // update blog
  updateTodo({ commit }, updatedTodo) {
    commit("UPDATE_TODOLIST", updatedTodo);
  },
  // delete blog
  deleteTodo({ commit }, id) {
    commit("REMOVE_TODOLIST", id);
  },
  setSelectTodolist({ commit }, data) {
    commit("SET_SELECT_TODOLIST", data);
  },
  removeSelectTodolist({ commit }) {
    commit("REMOVE_SELECT_TODOLIST")
  }
};

const mutations = {
  SET_TODOLIST(state, data) {
    state.todolists = data;
  },
  REMOVE_TODOLIST(state, id) {
    const index = state.todolists.findIndex((todo) => todo.id === id);
    state.todolists.splice(index, 1);
  },
  UPDATE_TODOLIST(state, updatedTodo) {
    const index = state.todolists.findIndex(
      (todo) => todo.id === updatedTodo.id
    );
    if (index !== -1) {
      state.todolists.splice(index, 1, updatedTodo);
    }
  },
  ADD_TODOLIST(state, newTodo) {
    state.todolists.unshift(newTodo);
  },
  SET_SELECT_TODOLIST(state, data) {
      state.selectTodolist = data;
  },
  REMOVE_SELECT_TODOLIST(state) {
      state.selectTodolist = {};
  }
};

const getters = {
    getTodolists: (state) => {
        return state.todolists;
    },
    getSelectTodolist: (state) => {
        return state.selectTodolist;
    }
};

export default new Vuex.Store({
  modules,
  state,
  actions,
  mutations,
  getters
});
