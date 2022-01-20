# Express
>Express é um pacote do NodeJs, muito utilizado para configurarmos e utilizar rotas

## Instalar Express
    npm install express

## Configurando Express
```js
// Importar módulo
const express = require('express');

// Executando a função que vai iniciar o express, e passando esse "retorno" para a variável "app"
const app = express();    
```


## Abrir um Servidor na porta 8080
```js
app.listen(8080, /*Opcional*/err => {
    if(err)
        return console.log('Erro no servidor');
    console.log('Servidor rodando'); 
})
```


## Métodos HTTP
>GET = Buscar ou listar alguma informação
>POST = Criar alguma nova informação
>DELETE = Apagar uma informação existente
>PUT = Atualizar uma informação existente
>PATCH = Alterar apenas uma informação específica
>Ps: É possível ter diferentes métodos para uma mesma rota

```js
app.get('/urlroute', (req, res) => {
    // Toda rota PRECISA de um MÉTODO HTTP e de uma RESPOSTA. 
        // Após a resposta, a comunicação é encerrada
    res.send('Hello World');
});
```


```js
// Métodos DE REPOSTA
app.get('/', (res, res) => {
    // Renderizar um HTML passando parâmetro (Opcional)
    res.render('./', { object })
    // Retornar um objeto JSON (Ps: Os resultado de pesquisas do bd são um objeto json)
    res.json( { message: "Hello World" } );
    // Redirecionar o usuário para uma pagina
    res.redirect('/pathWanted');
})
```
## Principais Parâmetros recebidos por uma rota:
>   Body Params (Request Body) = Dados para criação de um registro (POST)
>   Routes Params: Identificar qual recurso eu quero deletar (DELETE)
>   Query Params: Parâmetros usados para o resto, como listagem, paginação, filtragem, ordenação... (GET)


## RoutesParams
```js
// Passando parâmetros

    // Parâmetros simples via URL

        // Ps: Podemos repetir o processo e passar múltiplos parâmetros. basta cada /:parâmetro?, recebermos pela url com /informação
        // Ps: Se removermos o '?', o parâmetro se torna obrigatório
app.get('/user/:usrName?', (req, res) => {
    // req.params.objAtribute

    res.send(`O parâmetro recebido no site 
        "http://localhost:8080/user/leo1781", é: 
        ${req.params.usrName}`);
});
```

## QueryParams GET()
```js
app.get('/user', (req, res) => {
    // res.query['urlAtribute'];

    res.send(`O parâmetro recebido no site 
        "http://localhost:8080/user?usuario=Leonardo", é: 
        ${req.query["usuario"]}`)
})
```


## QueryParams POST()
>Ps: O express por sí só, não é capaz de decodificar o que é recebido na request.body (Transferência de infos via POST). 
>Por isso é necessário a instalação do Pacote do body-Parser, ferramenta que transpila o resultado (body) enviado de um formulário via POST, para um código interpretado pelo javascript
## INSTALL
    npm install body-parser

## IMPORT
    const bodyParser = require("body-parser");

## CONFIG
>Ativa o uso do bodyParser, do qual traduzirá informações recebidas via POST, para uma estrutura interpretada pelo javascript. (NO SCRIPT MAIN)
```js
    app.use(bodyParser.urlencoded({extended: false}))
```
>Permitir a leitura de dados de formulários, enviados via JSON
```js
    app.use(bodyParser.json());
```

**PS: Em novas versões do express, podemos fazer isso diretamente sem a instalação do body-parser. ex:**

```js
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
```
>Acessar objeto retornado
```js
    req.body;
```


## VOLTANDO AO QueryPArams POST()
```js
app.post('/', (req, res) => {
    let recievingInfo = req.body.htmlTagName;
    // ... code
})
```

## USAR O EXPRESS.ROUTES PARA SEPARAR NOSSOS ARQUIVOS DE ROTAS
>Basta criar um novo ARQUIVO.js (como routes.js) > Importar o Express e Express Router > Criar Rotas > Exportar o modulo router > importar no arquivo index.js, e criar o método app.use, informando a rota e o módulo:
```js
// NO ARQUIVO QUE VAI EXPORTAR AS ROTAS (routes.js)
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // code...
});

router.get('/urlPath', (req, res) => {
    // code...
});
// Export
module.exports = router;

// NO ARQUIVO QUE VAI IMPORTAR AS ROTAS (index.js)

// Import
const routerControle = require('./path/fileName.js');

// Using and Set pré-URL (optional)
app.use('/otherURL', routerControle);
```
