import { useContentStore } from '~/store/content-store'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useContentStore($pinia),
    },
  }
})
