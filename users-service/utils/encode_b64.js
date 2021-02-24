const fs = require('fs')

module.exports = file => {
  const bitmap = fs.readFileSync(file, { encoding: 'base64' })
}