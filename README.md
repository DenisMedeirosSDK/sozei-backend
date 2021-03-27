# SOZEI - Backend - Desenvolvedor Junior

## Requisitos da aplicação

* [x] Deve ser possível criar uma nova ferramenta
* [x] Deve ser possível deletar uma ferramenta
* [x] Deve ser possível listar todas ferramentas
* [x] Deve ser possível filtrar ferramentas por tag

---
## Ferramentas usadas

* Typescript
* Typeorm
* PostgreSQL
* Node JS
* Docker
* Swagger

---
## Requisitos para executar

* NodeJs - versão v12.x - Necessário porta 3000 aberta
* NPM - versão v6.14.10
* PostgreSQL - versão v13.2 - Necessário usar porta 5432

---
## Como executar

```bash
git clone https://github.com/DenisMedeirosSDK/sozei-backend.git

cd sozei-backend
```
---
## Ambiente local

```bash

Instale as dependências:

"npm install"

Para executar as migrations:

"npm run typeorm migration:run"

Para iniciar a aplicação:

"npm run start"

```

---
## Docker

```bash

// Dentro do terminal

docker build -t <nome da imagem> .

docker compose up -d

// Para verificar se esta executando

docker logs sozei -f

A seguinte mensagem aparecera "Server start on port, 3000"

// Execute as  migrations para poder inserir dados no banco

Para executar as migrations "npm run typeorm migration:run"

```
---
## Documentação de rotas

Para acessar a documentação de rotas, basta acessar ``http://localhost:3000/api-docs``

Também é possível fazer as requisições através do arquivo ``Insomnia_sozei.json`` em .docs para o
[insomnia](https://insomnia.rest/).

Copie o conteúdo do arquivo depois dentro do insomnia terá uma opção **CREATE** clique em *Clipboard*



