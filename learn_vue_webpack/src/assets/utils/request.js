import axios from 'axios'

// axios.defaults.headers

function requestHandle (config) {
  config.params = Object.assign(config.params, { _T: '123' })
  return config
}

const service = axios.create({
  baseURL: 'http://localhost:8083/',
  timeout: 3000
})

service.interceptors.request.use(requestHandle)

export default service
