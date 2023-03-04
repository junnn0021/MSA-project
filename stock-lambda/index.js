const axios = require('axios').default
exports.handler = async (event) => {
  const a = JSON.parse(event.Records[0].body).MessageAttributes
  console.log(a)



}
