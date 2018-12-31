const app = {
  state: {
    sidebar: {
      withoutAnimation: false
    },
    device: 'desktop',
    language: 'en',
    size: 'medium'
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
    },
    SET_SIZE: (state, size) => {
      state.size = size
    }
  },
  actions: {
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setSize({ commit }, size) {
      commit('SET_SIZE', size)
    }
  }
}

export default app
