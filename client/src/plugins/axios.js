import inst from 'axios'
import NProgress from 'nprogress'
import store from '@/store'

let axios = inst.create()

NProgress.configure({ easing: 'ease', speed: 500 })

axios.interceptors.request.use(config => {
  const { requestCount } = store.state.loading

  if (requestCount === 0) {
    NProgress.start()
  }

  store.commit('setRequestCount', true)

  return config
})

axios.interceptors.response.use(response => {
  store.commit('setRequestCount', false)
  const { requestCount } = store.state.loading

  if (requestCount === 0) {
    NProgress.done()
  }
  return response
})

// Vue.prototype.$axios = axios
export default axios
