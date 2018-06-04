const next = require('next')
const express = require('express')
const ua = require('universal-analytics')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const visitor = ua(process.env.GA_CODE, { https: true })

if (!dev) {
  visitor.pageview('/').send()
}

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, (err) => {
      if (err) throw err

      console.log(`Server is running on port ${PORT}`)

    })

  })
