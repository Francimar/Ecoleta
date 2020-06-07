// Importando a dependência do Sqlite3
const sqlite3 = require("sqlite3").verbose();

// Criar o objeto do BD
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

// Utilizando o objeto de BD
/*db.serialize(() => {
  // 1 Criar tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `);

  // 2 Inserir dados
  const query = `INSERT INTO places (
    image, 
    name, 
    address, 
    address2, 
    state, 
    city, 
    items) 
  VALUES (?,?,?,?,?,?,?);`;

  const values = [
    "https://images.unsplash.com/photo-1542739674-b449a8938b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    "Papersider",
    "Guilherme Gembala",
    "Número 260",
    "Santa Catarina",
    "Rio do Sul",
    "Rsíduos Eletrônicos, Lâmpadas",
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Cadastrado com Sucesso!");
    console.log(this);
  }

  //db.run(query, values, afterInsertData);

  // 3 Consultar Dados
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log("Registro encontrados!");
    console.log(rows);
  });

  // Deletando Registro
  db.run(`DELETE FROM places WHERE id = ?`, [2], function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Registro deletado com sucesso");
  }); 
});*/
