import service from './request'

function getAction (url, parameter) {
  return service({
    url: url,
    method: 'get',
    params: parameter
  })
}

export { getAction }
