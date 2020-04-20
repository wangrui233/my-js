import service from './request'

export function getAction (url, parameter) {
  return service({
    url: url,
    method: 'get',
    params: parameter
  })
}
