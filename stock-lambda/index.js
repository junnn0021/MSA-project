const axios = require('axios').default
exports.handler = async (event) => {
  const { MessageId, MessageAttributeProductId, MessageAttributeFactoryId } = JSON.parse(event.Records[0].body).MessageAttributes
  console.log(MessageAttributeFactoryId, MessageAttributeProductId)

  const payload = {
    MessageGroupId: MessageId,
    MessageAttributeProductId: MessageAttributeProductId.Value,
    MessageAttributeProductCnt: "10",
    MessageAttributeFactoryId: MessageAttributeFactoryId.Value,

  }
  console.log(payload)

  axios.post('http://project3-factory-api.coz-devops.click/api/manufactures', payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


}
