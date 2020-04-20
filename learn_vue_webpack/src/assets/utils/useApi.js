import { getAction } from './baseApi'

export default class {
  async output (promise, out, error) {
    try {
      let resp = await promise
      return resp[out]
    } catch (e) {
      if (e && typeof e === 'function') {
        error(e)
      } else {
        return e
      }
    }
  }
  getArray () {
    let url = 'getArray'
    return this.output(getAction(url), 'data', null)
  }
  get Msg () {

  }
}
