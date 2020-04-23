import { getAction } from './baseApi'
import urls from '../url'

export default class {
  async output (promise, out, error) {
    try {
      let resp = await promise
      return resp[out] || resp
    } catch (e) {
      if (e && typeof e === 'function') {
        error(e)
      } else {
        return e
      }
    }
  }

  getArray () {
    let params = {
      name: 'chen_m2',
      score: 'js'
    }
    return this.output(getAction(urls.getArray, params), 'data', null)
  }

  getMsg () {
    let timer = new Promise(
      (resolve, reject) => {
        let Flag = (Math.random() * 10).toFixed(0)
        setTimeout(() => {
          Flag >= 5
            ? resolve({ data: 'jack' })
            : reject(new Error({ msg: '失败' }))
        }, 1000)
      }
    ).then(data => data).catch(error => error)
    return this.output(timer, 'data', null)
  }

  getAll () {
    return Promise.all([this.getArray(), this.getMsg()])
  }
}
