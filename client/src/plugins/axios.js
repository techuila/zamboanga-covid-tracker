import inst from 'axios'
import NProgress from 'nprogress'
// import useLoading from '@/composables/useLoading'

let axios = inst.create()
let requestCount = 0

NProgress.configure({ easing: 'ease', speed: 500 })

// const { requestCount, setRequestCount } = useLoading()

axios.interceptors.request.use(config => {
  if (requestCount === 0) {
    NProgress.start()
  }

 requestCount++

  return config
})

axios.interceptors.response.use(response => {
  --requestCount

  if (requestCount === 0) {
    NProgress.done()
  }
  return response
})

// // Vue.prototype.$axios = axios
export default axios
