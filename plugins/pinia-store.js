import { useContentStore } from '~/store/content-store'
const 
export default defineNuxtPlugin(({ $pinia }) => {
  console.log('Executed Main Store')
  return {
    provide: {
      store: useContentStore($pinia),
    },
  }
})
