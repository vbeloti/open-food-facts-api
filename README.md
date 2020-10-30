# Open Food Facts Api

- [Open-food-facts]
    - [Resumo](#resumo)
    - [Link Demonstração API](#link-demonstracao-api)
    - [Open API 3.0](#open-api-3.0)
    - [Pré Requisitos](#pre-requisitos)
    - [Instalando](#instalando)
    - [Executando o ambiente de desenvolvimento](#executando-o-ambiente-de-desenvolvimento)
    - [Executando os testes](#executando-os-testes)
    - [Executando o CRON](#executando-o-cron)
    - [Executando o Docker](#executando-o-docker)
    - [Recursos](#recursos)
    - [Rota /](#rota-/)
    - [Rota Produtos](#rota-produtos)
    - [Rota Produto](#rota-produto)

## Resumo

Esta é uma API construída com Typescript + NodeJS + Express + MongoDB que recebe dados do banco de dados Open Food Facts, além da API existe um scrapper onde é possível configurar quantidade de produtos a ser scrapped, além de configurar um cron com horário para realizar o scrapper no melhor horário

## Link Demonstração API

<a href="https://open-food-facts.herokuapp.com/">https://open-food-facts.herokuapp.com/</a>

## Open API 3.0

<a href="https://open-food-facts.herokuapp.com/docs">https://open-food-facts.herokuapp.com/docs ou http://localhost:3333/docs </a>

### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico com o NodeJS 14+ instalado.

Para usar o banco de dados, você precisará ter o MongoDB devidamente configurados.

1º Para configurar o banco de dados voce precisará localizar o arquivo env.example que se encontra na raiz do projeto renomeá-lo para .env e mudar a ("URL_CONNECTION") para a do seu banco de dados Mongo.

2º Para configurar o horário de execução do CRON será necessário utilizar o arquivo .env e definir a hora HOUR e os minutoes MINUTE a ser executados.

### Instalando

** Clonando o Repositório **

$ git clone https://github.com/vbeloti/open-food-facts-api

$ open-food-facts-api

** Instalando dependências **

$ yarn

_ou_

$ npm install

** Rodando as migrações **

$ yarn typeorm migration:run

_ou_

$ npm run typeorm migration:run

### Executando o ambiente de desenvolvimento

$ yarn dev

_ou_

$ npm run dev

### Executando os testes

$ yarn test

_ou_

$ npm run test

### Executando o CRON

$ yarn cron

_ou_

$ npm run cron

### Executando o Docker

$ docker-compose up

## Recursos

| Recurso                    | Descrição                                                             |
|:--------------             |:----------------------------------------------------------------------|
| `GET /      `              | Retorna a mensagem Fullstack Challenge 20201026                       |
| `GET /products`            | Retorna uma lista de produtos                                         |
| `GET /products/:code`      | Retorna um produto                                                    |


### Rota /

- **Essa é uma rota para retornar a mensagem Fullstack Challenge 20201026 **

> http://localhost:3333/ ou https://open-food-facts.herokuapp.com/

| /                 |                                                                                     |
|:------------------|:------------------------------------------------------------------------------------|
| Recurso           |                         **/**                                                       |
| Metodo            |                         **GET**                                                     |
| Parametros        |                         ****                                                        |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ message:  "Fullstack Challenge 20201026!!! 🔥" }`  |
| Resposta do erro  |  **Código:** 500 **Conteúdo:** `{ error:  Internal server error }`                  |

### Rota Produtos

- **Essa é uma rota para retornar produtos**

> http://localhost:3333//products ou https://open-food-facts.herokuapp.com/products

| Products          |                                                                            |
|:------------------|:---------------------------------------------------------------------------|
| Recurso           |                         **/products**                                      |
| Metodo            |                         **GET**                                            |
| Parametros        |                         **page**:**string**:**opcional**                   |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ "message":  "[{products}]" }`              |
| Resposta do erro  |  **Código:** 400 **Conteúdo:** `{ "message": "There are no products" }`    |

### Rota Produto

- **Essa é uma rota para retornar um produto**

> http://localhost:3333//products/:code ou https://open-food-facts.herokuapp.com/products/:code

| Products          |                                                                            |
|:------------------|:---------------------------------------------------------------------------|
| Recurso           |                         **/products/:code**                                |
| Metodo            |                         **GET**                                            |
| Parametros        |                         **code**:**string**:**requerido**                  |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ "message":  "{product}" }`                |
| Resposta do erro  |  **Código:** 400 **Conteúdo:** `{ "message": "Product does not exists" }`  |



