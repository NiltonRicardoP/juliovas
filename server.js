const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const hostname = "localhost"
const port = process.env.PORT || 3000

// Quando em produção, o aplicativo Next.js é pré-construído
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Adiciona cabeçalhos para o healthcheck
      res.setHeader("X-Powered-By", "Next.js on Railway")

      // Analisa a URL da solicitação
      const parsedUrl = parse(req.url, true)

      // Permite o healthcheck
      if (parsedUrl.pathname === "/health" || parsedUrl.pathname === "/healthz") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }))
        return
      }

      // Deixa o Next.js lidar com a solicitação
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Error occurred handling", req.url, err)
      res.statusCode = 500
      res.end("Internal Server Error")
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
    console.log(`> Environment: ${process.env.NODE_ENV}`)
    console.log(`> Listening on port: ${port}`)
  })
})
