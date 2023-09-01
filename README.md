# Documentação da API

Api restfull para estudo de caso envolvendo o framework javascript Node.js

## Introdução

A API permite que você gerencie produtos, realizando operações como listar, adicionar, atualizar e excluir produtos.

## Antes de começar
Ao clonar api para sua máquina local, para executar basta precisará baixar as dependencias necessárias: 

```bash

C:\Users\Usuario\meu_projeto> npm install

````

Após isso, basta executar o seguinte comando e sua api irá funcionar...

```bash

C:\Users\Usuario\meu_projeto> node app.js

```


## Observações

A API acesso a um banco de dados em memória usando o SQLite3, portanto ao executar a aplicação, ele subirá com uma instancia do banco, basta visualizar com seu plugin (escolha do dev)

## Base URL

A URL base para a API é: `[http://seu-dominio.com](https://products-puc-mg-d92330073a3f.herokuapp.com/)`

## Endpoints

### Listar Produtos

Retorna uma lista de todos os produtos.

- **URL:** `/produtos`
- **Método:** GET
- **Resposta de Sucesso:**
  - Código: 200 (OK)
  - Conteúdo: Array de objetos de produtos

### Obter um Produto por ID

Retorna as informações de um produto com base no ID fornecido.

- **URL:** `/produtos/:id`
- **Método:** GET
- **Parâmetros:**
  - `id`: ID do produto
- **Resposta de Sucesso:**
  - Código: 200 (OK)
  - Conteúdo: Objeto do produto

### Adicionar um Produto

Adiciona um novo produto à lista.

- **URL:** `/produtos`
- **Método:** POST
- **Corpo da Requisição:**
  - `descricao`: Nome do produto (string)
  - `valor`: Nome do produto (float)
  - `marca`: Preço do produto (string)
- **Resposta de Sucesso:**
  - Código: 201 (Created)
  - Conteúdo: Mensagem de sucesso e ID do novo produto

### Atualizar um Produto

Atualiza as informações de um produto com base no ID fornecido.

- **URL:** `/produtos/:id`
- **Método:** PUT
- **Parâmetros:**
  - `id`: ID do produto
- **Corpo da Requisição:**
  - `descricao`: Nome do produto (string)
  - `valor`: Nome do produto (string)
  - `marca`: Preço do produto (float)
- **Resposta de Sucesso:**
  - Código: 200 (OK)
  - Conteúdo: Objeto do produto atualizado

### Excluir um Produto

Exclui um produto com base no ID fornecido.

- **URL:** `/produtos/:id`
- **Método:** DELETE
- **Parâmetros:**
  - `id`: ID do produto
- **Resposta de Sucesso:**
  - Código: 204 (no content)
  - Conteúdo: Mensagem de sucesso

## Exemplo de Uso

```http
GET /produtos HTTP/1.1
Host: [seu-dominio.com](https://products-puc-mg-d92330073a3f.herokuapp.com/)
http
Copy code
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
        "id": 1,
        "descricao": "Arroz parboilizado 5Kg",
        "valor": 25,
        "marca": "Tio João"
    },
    {
        "id": 2,
        "descricao": "Maionese 250gr",
        "valor": 7.2,
        "marca": "Helmans"
    }
]
