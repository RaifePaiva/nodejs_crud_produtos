
const express = require('express');
// const db = require('./database');
// const bodyParser = require('body-parser');
// const { status } = require('express/lib/response');

const app = express();
// app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.send('Minha primeira API com Node.js e Express!');
})

// app.get('/produtos', (req, res) => {
//     db.all("SELECT id, descricao, valor, marca FROM produtos", (err, rows) => {
//         if (err) {
//           res.status(503).json({ error: err.message });
//           return;
//         }
//         res.json(rows);
//     });
// });

// app.post('/produtos', (req, res) => {
//     const { descricao, valor, marca } = req.body;
  
//     if (!descricao || !valor || !marca) {
//       return res.status(400).json({ error: 'Dados nulos ou inválidos.' });
//     }
  
//     const insertQuery = 'INSERT INTO produtos (descricao, valor, marca) VALUES (?, ?, ?)';
//     db.run(insertQuery, [descricao, valor, marca], function (err) {
//       if (err) {
//         return res.status(503).json({ error: err.message });
//       }
//       res.status(201).json({ message: 'Novo produto adicionado!', ID: this.lastID });
//     });
//   });

//   app.get('/produtos/:id', (req, res) => {
//     const produtoId = req.params.id;
  
//     const selectQuery = 'SELECT * FROM produtos WHERE id = ?';
//     db.get(selectQuery, [produtoId], (err, row) => {
//       if (err) {
//         return res.status(503).json({ error: err.message });
//       }
  
//       if (!row) {
//         return res.status(404).json({ error: 'Produto não encontrado' });
//       }
  
//       res.json(row);
//     });
//   }); 
  
//   app.put('/produtos/:id', (req, res) => {
//     const produtoId = req.params.id;
//     const { descricao, valor, marca } = req.body;
//     const selectQuery = 'SELECT * FROM produtos WHERE id = ?';
//     let produtoAtual = null;
  
//     if (!descricao || !valor || !marca) {
//       return res.status(400).json({ error: 'Campo nulos ou inválidos' });
//     }

//     db.get(selectQuery, [produtoId], (err, row) => {
//         if (err) {
//             return res.status(503).json({ error: err.message });
//         }

//         produtoAtual = row
//     });
  
//     const updateQuery = 'UPDATE produtos SET descricao = ?, valor = ?, marca = ? WHERE id = ?';
//     db.run(updateQuery, [descricao, valor, marca, produtoId], function (err) {
//       if (err) {
//         return res.status(503).json({ error: err.message });
//       }
  
//       if (this.changes === 0) {
//         return res.status(404).json({ error: 'Produto não encontrado!' });
//       }
//     });

//     db.get(selectQuery, [produtoId], (err, row) => {
//         if (err) {
//             return res.status(503).json({ error: err.message });
//         }

//         res.json({ message: 'Produto atualizado!', before: produtoAtual, after:  row});
//     });
//   });

//   app.delete('/produtos/:id', (req, res) => {
//     const produtoId = req.params.id;
  
//     const deleteQuery = 'DELETE FROM produtos WHERE id = ?';
//     db.run(deleteQuery, [produtoId], function (err) {
//       if (err) {
//         return res.status(503).json({ error: err.message });
//       }
  
//       if (this.changes === 0) {
//         return res.status(404).json({ error: 'Produto não encontrado!' });
//       }
  
//       res.status(204).json({ message: 'Produto deletado com sucesso!' });
//     });
//   });


//Server
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
