import { GetterTree, MutationTree } from "vuex"
import { noForks } from "~/utils"

export type Project = {
  name: string
  fork: boolean
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

export const mutations: MutationTree<State> = {
  showMenu(state) {
    state.isMenuOpen = true
  },
  hideMenu(state) {
    state.isMenuOpen = false
  },
  setProjects(state, projects) {
    state.projects.success = true
    state.projects.data = projects.filter(noForks)
  },
  setError(state, error) {
    state.projects.success = false
    state.projects.error = error
  },
}
