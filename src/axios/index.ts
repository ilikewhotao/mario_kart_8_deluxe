import axios from 'axios'

async function getJson(url: string) {
  return await axios
    .get(url)
    .then(function (response) {
      // 处理成功情况
      return response.data
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error)
    })
    .finally(function () {
      // 总是会执行
    })
}

export { getJson }
