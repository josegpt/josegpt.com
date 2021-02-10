import { GetterTree, ActionTree, MutationTree } from "vuex"

export type Project = {
  name: string
  html_url: string
}

export type State = {
  isMenuOpen: boolean
  projects: {
    success: boolean
    error: string
    data: Project[]
  }
}

export const state = (): State => ({
  isMenuOpen: false,
  projects: {
    success: false,
    error: "",
    data: [],
  },
})

export const getters: GetterTree<State, State> = {
  isMenuOpen: (state) => state.isMenuOpen,
  projects: (state) => state.projects,
}

export const actions: ActionTree<State, State> = {
  async nuxtServerInit({ commit }, { $axios }) {
    commit("setError", "")

    try {
      const response = await $axios.get(
        "https://api.github.com/users/josegpt/repos"
      )
      commit("setProjects", response.data)
    } catch {
      commit("setError", "there was an error getting the projects")
    }
  },
}

export const mutations: MutationTree<State> = {
  showMenu(state) {
    state.isMenuOpen = true
  },
  hideMenu(state) {
    state.isMenuOpen = false
  },
  setProjects(state, projects) {
    state.projects.success = true
    state.projects.data = projects
  },
  setError(state, error) {
    state.projects.success = false
    state.projects.error = error
  },
}
