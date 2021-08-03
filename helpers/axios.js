const axios = require(`axios`)

const tembak = axios.create({
  baseURL: "https://api.happi.dev/v1"
})

module.exports = tembak