import * as Mock from './mock.js'
const DEFAULT_OPTION = {};
const util = {
  request(opt) {
    // Object.assign 浅复制
    let options = Object.assign(
      {},
      DEFAULT_OPTION,
      opt
    )
    let {url, data, header, method, dataType, mock = false} = options
    return new Promise((resolve, reject) => {
      if (mock) {
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        resolve(res);
      } else {
        wx.request({
          url,
          data,
          header,
          method,
          dataType,
          success(res) {
            if (res.statusCode === 200 && res.data) {
              resolve(res.data)
            }
            else {
              reject()
            }
          }
        })
      }
    })
  }
}
export default util;