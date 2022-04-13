

# Instalação

 ## Instale o gerenciador de pacotes para o Node.JS npm
```bash
$ npm install
```

## Instale a CLI globalmente usando:
```bash
$ npm install -g @nestjs/cli
```
## Instale o Swagger para visualizar a documentação
```bash
$ npm i swagger
```
## Instale o Typeorm paginate para utilizar a rota de paginação disponível
```bash
$ npm i nestjs-typeorm-paginate
```

## Para as trabalhar com requisições http instale o nestjs/axios
```
$ npm i --save @nestjs/axios
```

## Para trabalhar com upload de arquivos utilzamos o multer do Express.
```
$ npm i -D @types/multer
```

## Para utilizar o modulo de envio de e-mail intalamos o nodemailer
```
$ npm i @nestjs-modules/mailer
``` 

<h1>Pronto, agora você já pode iniciar a aplicação! 🚀</h1>

## Rodando o app


```bash
# modo de desenvolvimento
$ npm run start

# watch mode
$ npm run start:dev

# mode de podução
$ npm run start:prod
```
# Teste

```bash
# testes unitarios
$ npm run test

# e2e testes
$ npm run test:e2e

# teste coverage
$ npm run test:cov
```


<div>
  
  <h2> Api Nestjs PostgreSql </h2>
  
</div>

<div>
  
  - [x] A aplicaçao possui sistema de login com autenticação JWT;<br>
  - [x] O sistema possui descrição de interface implementada com Swagger;<br>
  - [x] A Api possui conexão com banco de dados postgreSQL;<br>
  - [x] O sistema pemite cadastrar um produto e salvar em banco de dados;<br>
  - [X] É possivel atualizar os dados de um produto cadastrado;<br>
  - [x] O sistema permite remover um produto cadastrado no banco de dados;<br>
  - [x] É disponibilizada uma rota lista todos os produtos cadastrados, permitindo paginação com limite de listagem de até 100 produtos; <br>
  - [x] O sistema pemite cadastro de usuários de autenticação em banco de dados;<br>
  - [X] É permitido atualizar os dados de um usuário de autenticação cadastrado;<br>
  - [x] O sistema permite remover um usuário de autenticação cadastrado no banco de dados;<br>
  - [x] É disponibilizada uma rota que lista todos os usuarios de autenticação cadastrados;<br>
  - [x] A aplicaçao permite checar a quantidade disponivel de um determinado produto.<br>
  - [x] O sistema possui um metodo que lista os dados de uma requisição utilizando a biblioteca nest/axios
  - [x] A aplicação possui um metodo que lista e salva em banco de dados a resposta.data da requisição.
  - [x] O sistema possui serviço de envio de email
  - [x] Api possui uma rota de upload de imagem com salvamento em banco de dados
 

</div>
