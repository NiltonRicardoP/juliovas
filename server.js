const http = require("http")
const fs = require("fs")
const path = require("path")

// Porta fornecida pelo Render ou 3000 como fallback
const PORT = process.env.PORT || 3000

// Criar o servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar cabeçalhos CORS para todas as respostas
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  // Responder imediatamente às solicitações OPTIONS (preflight)
  if (req.method === "OPTIONS") {
    res.writeHead(200)
    res.end()
    return
  }

  // Rota para o healthcheck
  if (req.url === "/health" || req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }))
    return
  }

  // Rota principal - servir o HTML
  if (req.url === "/" || req.url === "/index.html") {
    try {
      const html = fs.readFileSync(path.join(__dirname, "public", "index.html"), "utf8")
      res.writeHead(200, { "Content-Type": "text/html" })
      res.end(html)
    } catch (err) {
      // Se o arquivo não existir, servir o HTML embutido
      const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dr. Julio Vasconcelos</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #fff;
            background-color: #0a0a2e;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }
          h1 {
            font-size: 2rem;
            margin-top: 20px;
          }
          .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 4px solid #3b5fe2;
            object-fit: cover;
          }
          .contact {
            margin-top: 30px;
            background-color: #0c0c35;
            padding: 20px;
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <img src="https://juliovas.onrender.com/" alt="Dr. Julio Vasconcelos" class="profile-image">
        <h1>JULIO VASCONCELOS</h1>
        <p>CRP: 05/31194</p>
        <p>Neuropsicólogo | Psicólogo clínico | Doutor em Saúde mental</p>
        
        <div class="contact">
          <p><strong>WhatsApp:</strong> (21) 99829-2471</p>
          <p><strong>Email:</strong> dr.juliovasconcelos@gmail.com</p>
        </div>
        
        <p style="margin-top: 30px; font-size: 0.8rem;">© 2025 Dr. Julio Vasconcelos. Todos os direitos reservados.</p>
        <p style="font-size: 0.8rem;">Desenvolvido por RP Desenvolvimento</p>
      </body>
      </html>
      `
      res.writeHead(200, { "Content-Type": "text/html" })
      res.end(html)
    }
    return
  }

  // Rota 404 para qualquer outra URL
  res.writeHead(404, { "Content-Type": "text/html" })
  res.end("<h1>404 - Página não encontrada</h1>")
})

// Iniciar o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
