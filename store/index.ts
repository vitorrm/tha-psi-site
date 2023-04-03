export interface State {
  perPage: number
  pages: Page[]
  posts: Post[]
}

// Initial State
export const appState = {
  perPage: 4,
  pages: [],
  posts: [],
}

export const state = (): State => ({
  ...appState,
})

// ----- Actions ------
export const getters = {
  getCounter(state: { counter: number }) {
    return state.counter
  },
}

// ----- Mutations ------
export const mutations = {
  SET_PAGES: (state, payload: Record<string, unknown>): void => {
    state.pages = payload
  },
  SET_POSTS: (state, payload: Record<string, unknown>): void => {
    state.posts = payload
  },
}

export const actions = {
  async GET_POSTS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    // const context = await require.context('@/content/blog/', false, /\.json$/)
    // const posts = await getContent({ context, prefix: 'blog' })
    // commit('SET_POSTS', posts)
  },

  async GET_PAGES_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    // const context = await require.context('@/content/pages/', false, /\.json$/)
    // const pages = await getContent({context,prefix: 'pages',})
    // commit('SET_PAGES', pages)
  },

  async nuxtServerInit({ dispatch }): Promise<void> {
    console.log('Blabla')
    await Promise.all([dispatch('GET_PAGES_LIST'), dispatch('GET_POSTS_LIST')])
  },
}

export const strict = false
