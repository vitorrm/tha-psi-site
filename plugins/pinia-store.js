import { useMainStore } from '~/store/content-store'
export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useMainStore($pinia),
    },
  }
})
