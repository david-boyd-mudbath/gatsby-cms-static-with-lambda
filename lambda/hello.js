var rf = require('random-facts');
export function handler(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({fact: rf.randomFact()  })
    })
  }