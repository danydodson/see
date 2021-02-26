
const handler = (err, req, res, next) => {

  if (typeof (err) === 'string') {
    // custom application error
    return res.status(400).json({ message: err })
  }

  if (err.name === 'ValidationError') {
    // mongoose validation error
    return res.status(400).json({ message: err.message })
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    return res.status(err.status).send({ message: 'Invalid Token' }).end()
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message })

}

module.exports = { handler }