## Basic of EJS
>EJS é uma template-engine que renderiza um html com javascript embutido

## Instalar EJS
    npm install ejs
>PS: (Instal EJS LANGUAGE SUPPORT Extension on vsCode)

## Configurando o EJS 
>Precisamos configurar no script MAIN, para o express utilizar o EJS como engine de renderização do html.
    app.set('view engine', 'ejs');


```html (EJS)
<!-- USANDO Variáveis = "<%= %>" -->
<!-- USANDO Loops/Condicionais = '<% código %>'' -->
<!-- USANDO Includes (Duplicando/importando blocos de código) = '<%- include('path/file.ext') %>'' -->
<!-- PS: Não pode haver código html dentro das tags EJS -->

    <%#- JSON.stringify(objs).replace(/},/g,"}<br>") %>
    <%#- JSON.stringify(obj).replace(/(,)|({)/g,"<br>") %>
<!-- EX: -->
    <% if(true){ %>
        <p> Meu nome é: <%= varNome %> </p>
    <% } else { %> 
        <p> Não tem nome </p>
    <% } %>
```
