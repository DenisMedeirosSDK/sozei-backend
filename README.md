# SOZEI - Backend - Desenvolvedor Junior

## Requisitos mínimos da aplicação

* [x] Deve ser possível criar uma nova ferramenta
* [x] Deve ser possível deletar uma ferramenta
* [x] Deve ser possível listar todas ferramentas
* [x] Deve ser possível filtrar ferramentas por tag

## Bonus

* [x] Swagger da aplicação
* [x] Uso de ferramentas externas que facilitem o seu trabalho
* [x] Cuidados especiais com otimização, padrões, entre outros
* [x] Migrations ou script para configuração do banco de dados utilizado
* [x] Conceitos de SOLID e DDD
* [x] Conteinerização da aplicação
* [x] Autenticação e autorização JWT

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



Instale as dependências:

``npm install``

Para executar as migrations:

``npm run typeorm migration:run``

Para iniciar a aplicação:

``npm run start``


---
## Docker

Crie a imagem da aplicação

``docker build -t <nome da imagem> .``


Execute o docker compose da aplicação

``docker compose up -d``

// Para verificar se esta executando

``docker logs sozei -f``

// A seguinte mensagem aparecera *"Server start on port, 3000"*

Execute as  migrations para poder inserir dados no banco

Para executar as migrations

``npm run typeorm migration:run``

---
## Documentação de rotas

Para acessar a documentação de rotas, basta acessar ``http://localhost:3000/api-docs``

Também é possível fazer as requisições através do arquivo ``Insomnia_sozei.json`` em .docs para o
[insomnia](https://insomnia.rest/).

Copie o conteúdo do arquivo depois dentro do insomnia terá uma opção **CREATE** clique em *Clipboard*
