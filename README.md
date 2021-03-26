# SOZEI - Backend

## Requisitos da aplicação

* [x] Deve ser possível criar uma nova ferramenta
* [x] Deve ser possível deletar uma ferramenta
* [x] Deve ser possível listar todas ferramentas
* [ ] Deve ser possível filtrar uma ferramenta


## Ferramenta usadas

* Typescript
* Typeorm
* PostgreSQL
* Node JS
* Docker
* Docker-compose
## Requisitos para executar

* NodeJs - versão v12.x - Necessário porta 3000 aberta
* NPM - versão v6.14.10
* PostgreSQL - versão LTS - Necessário usar porta 5432

---
## Como executar

Para executar as migrations ``npm run typeorm migration:run``

Execute o comando ``npm run start`` , para iniciar a aplicação

---
## Docker

```bash

// Dentro do terminal

docker build -t <nome da imagem> .

docker compose up -d

// Para verificar se esta executando

docker logs sozei -f

A seguinte menssagem aparecera "Server start on port, 3000"

Para executar as migrations "npm run typeorm migration:run"

```

## Documentação de rotas

Para acessar o swagger, basta acessar.

``http://localhost:3000/api-docs``
