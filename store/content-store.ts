import { defineStore } from 'pinia'
export const useContentStore = defineStore('contentStore', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      if(this.counter > 0) console.log('It will increment')
      // `this` is the store instance
      this.counter++
    },
  },
  getters: {},
})
