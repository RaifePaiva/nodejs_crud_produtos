// const sqlite3 = require('sqlite3').verbose();

// // Criação de uma conexão com o banco de dados em memória
// const db = new sqlite3.Database(':memory:');

// // Criação da tabela com sqlite(exemplo)
// db.serialize(() => {
//   db.run("CREATE TABLE produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT, valor REAL, marca TEXT)");

//   // Inserir dados de exemplo
//   const stmt = db.prepare("INSERT INTO produtos VALUES (?, ?, ?, ?)");
//   stmt.run(1, "Arroz parboilizado 5Kg", 25.00, "Tio João");
//   stmt.run(2, "Maionese 250gr", 7.20, "Helmans");
//   stmt.run(3, "Iogurte Natural 200ml", 2.50, "Itambé");
//   stmt.run(4, "Batata Maior Palha 300gr", 15.20, "Chipps");
//   stmt.run(5, "Nescau 400gr", 8.00, "Nestlé");
//   stmt.finalize();
// });

// module.exports = db;