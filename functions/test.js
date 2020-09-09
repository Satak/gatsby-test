function getHandler(event, callback) {
  const statusCode = 200
  const body = JSON.stringify({ msg: `Thanks for using the GET method` })
  console.log('GET handler')
  callback(null, {
    statusCode,
    body,
  })
}

function postHandler(event, callback) {
  let statusCode
  let body
  console.log('POST handler')

  try {
    const parsedBody = JSON.parse(event.body)
    const name = parsedBody.name || 'Unknown'
    statusCode = 200
    body = JSON.stringify({ msg: `Thanks for using the POST method ${name}` })
  } catch (err) {
    statusCode = 400
    body = JSON.stringify({ msg: 'Error, parsing post data' })
  }

  callback(null, {
    statusCode,
    body,
  })
}

exports.handler = function(event, context, callback) {
  const handlers = {
    GET: getHandler,
    POST: postHandler,
  }
  const method = event.httpMethod
  const handler = handlers[method]

  if (!handler) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ msg: `Error, ${method} method not implemented` }),
    })
  } else {
    handlers[method](event, callback)
  }
}
