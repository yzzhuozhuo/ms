// const http = require('http')
// const url = require('url')

// const server = http.createServer((req, res) => {
//   console.log('req.url', req.url)
//   const { pathname, query } = url.parse(req.url, true)
//   if (pathname === '/jsonp') {
//     console.log('req.query', query)
//     const data = { name: 'yz' }
//     const result = `${query.callback}(${(JSON.stringify(data))})`
//     res.end(result)
//   } else {
//     res.end('test')
//   }
// })

// server.listen(4000)


// const express = require('express')

// const app = express()

// app.get('/jsonp', (req, res) => {
//   const data = { name: 'yz' }
//   const result = `${req.query.callback}(${(JSON.stringify(data))})`
//   res.send(result)
// })

// app.listen(4000)

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/jsonp', (ctx, next) => {
  const data = { name: 'yz' }
  const result = `${ctx.query.callback}(${(JSON.stringify(data))})`
  ctx.body = result
})

app.use(
  router.routes(),
  router.allowedMethods()
)

app.listen(4000)
