import axios from 'axios'
import { Message } from 'element-ui'

const http = axios.create({
  timeout: 3000
})

http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
  }
)

const msgNotify = function(t = 'info', m = '') {
  Message({
    type: t,
    message: m,
    duration: 2000
  })
}

http.interceptors.response.use(
  resp => {
    console.log(resp)
    let code = resp.status
    if (code >= 300) {
      msgNotify('error', '请求出错了！')
    } else if (resp.data.code !== 'A00000') {
      msgNotify('error', '请求出错了！')
    }
    return resp
  },
  err => {
    console.log(err)
  }
)

export default http
