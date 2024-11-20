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

// 数据初始化
async function initData() {
  return await axios
    .all([
      getJson(
        'https://ilikewhotao.github.io/data/mario_kart_8_deluxe/first/user.json?' +
          new Date().getTime()
      ),
      getJson(
        'https://ilikewhotao.github.io/data/mario_kart_8_deluxe/first/record.json?' +
          new Date().getTime()
      )
    ])
    .then(
      axios.spread((userJson, recordJson) => {
        return { userJson, recordJson }
      })
    )
}

export { getJson, initData }
