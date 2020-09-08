exports.handler = function(event, context, callback) {
  let statusCode
  let body
  try {
    const parsedBody = JSON.parse(event.body)
    const name = parsedBody.name || 'Unknown'
    statusCode = 200
    body = JSON.stringify({ msg: `Thanks for visiting ${name}` })
  } catch (err) {
    statusCode = 400
    body = JSON.stringify({ msg: 'Error, parsing post data' })
  }

  callback(null, {
    statusCode,
    body,
  })
}
