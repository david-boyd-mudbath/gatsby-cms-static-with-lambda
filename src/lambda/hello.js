exports.handler = function handler(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: 'Hi' }, null, 2),
    })
  }