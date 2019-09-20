import Taro from '@tarojs/taro'

const interceptor = function (chain) {
  const requestParams = chain.requestParams
  const { method, data, url } = requestParams
  console.log(`http ${method || 'GET'} --> ${url} data: `, data)
  if (url.indexOf('api.meizitu.net') > 0) {
    requestParams.header = {
      Referer: 'https://app.mmzztt.com'
    }
  }
  console.log(requestParams)
  return chain.proceed(requestParams)
    .then(res => {
      console.log(`http <-- ${url} result:`, res)
      return res
    })
}

Taro.addInterceptor(Taro.interceptors.logInterceptor)
Taro.addInterceptor(interceptor)
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor)

export default function get(url) {
  return Taro.request({ url: url })
}
