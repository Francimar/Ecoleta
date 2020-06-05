// Configurando o Servirdor

const express = require("express");
const server = express();

//Configurar Pasta Publica
server.use(express.static("public"));

// Utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// Configurando caminhos da aplicação
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Um título" });
});

server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

server.get("/search", (req, res) => {
  return res.render("search-results.html");
});

// Start Server
server.listen(3000);
