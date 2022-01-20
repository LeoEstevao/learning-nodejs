# Sobre o SEQUELIZE
>SEQUELIZE é um ORM (Object Relation Mapping), que se trata de um processo de mapeamento entre objetos e banco de dados RELACIONAIS.

## Instalar SEQUELIZE
    npm install sequelize

## Instalar driver do bd
    npm install mysql2
>O pacote/driver do mysql2 é necessário para a conexão com o banco de dados.

## Basic of Sequelize

### Conexões
>Configurar conexão em uma variável > Exportar a variável (objeto) > Importar no script MAIN
```javascript
// Importar
const sequelize = require('sequelize');
// CONEXÃO 
// CONECTAR A UM BD EXISTENTE
const connection = new sequelize
//  (DATABASE, USUÁRIO, SENHA, {SERVIDOR, LINGUAGEM DO BD: (MYSQL), Timezone/Fuso horário})
    ('DB_FORUM', 'root', '1234', { host: 'localhost', dialect: 'mysql', timezone: "-03:00" });

// Exportar
module.exports = connection;


// (NO SCRIPT MAIN)
// Importar
const connection = require('./path/databaseFile.js');
```

### Models (Tabelas)
>É preciso importar Conexão e o SEQUELIZE > Criar Model > Sincronizar com o BD > Exportar > Importar no script MAIN (será criado automaticamente)
```javascript
// Definição da tabela
    // PARAMETROS(NOME TABELA, CRIACAO DE CAMPOS, CONFIGS DA TABELA/SEQUELIZE)
const ModelName = constConnection.define('Tbl_Name', {
    NameField: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    },
    // CONFIGS do SEQUELIZE
    {
        sequelize,
        // Disable createdAt and updatedAt
        timestamps: false,
});

// Sincronizar o Model com o BD (no servidor)
    // Desabilitar o 'force', faz com que a tabela não seja RE-CRIADA caso já exista, e só seja criada, caso não exista

ModelName.sync( {
    force:false
}).then( () => {
    console.log('Tabela criada')
});


// Exportar Model da Tabela
module.exports = ModelName;


// Importar Model da Tabela (no Script main), que será executado automaticamente (Na criação de tabela)
const modelImportado = require('/path/fileName');
```

### INSERTS
>(Dentro de uma rota) Importar Model > Inserir dados através do create() > then() "Opcional"
>PS: bodyParser é necessário para fazer comunicação através do POST
```javascript
// Pode fazer múltiplos inserts
modelImportado.create( {
    field1: 'value',
    field2: 'value',
}).then( () => { // Após inserir dados (Opcional)
    res.redirect('/pathWanted');
})
```

### SELECTS
>
```javascript
// SELECT *
modelImportado.findAll({//OPCIONAIS \/
    raw:true, //Retorna apenas o resultado da query, sem informações extras
    order: [ ['field1', DESC ]/*OPTIONAL['field2'][ASC]*/ ], //Ordenação [campo, regra]
    where: { field1: 1 } //WHERE field1 = 1
    }
).then( queryResult => {
    res.render('/pathWanted', {// Informações passadas por parâmetros
        // Receber o resultado da query, como parâmetro para o site renderizado:
        queryInfos: queryResult
    })
})
// SELECT 1
modelImportado.findOne({ /*... code */})

// SELECT 1 USANDO a PK (Como o ID)
modelImportado.findByPk(ID).then( result => { /*... code */ })
```

## CRIANDO UM RELACIONAMENTO ENTRE TABELAS

Escolher uma tabela, e dentro dessa tabela (model), importar a tabela que você quer relacionar

>Caso seja um relacionamento (1 - 1) :
```js
Model1.belongsTo(Model2)
```

>Caso seja um relacionamento (1 - n) :
```js
Model1.hasMany(Model2)
```

>Passando algumas configurações adicionais desejadas no campo
```js
Model1.hasMany(Model2,{
  foreignKey: {
    name: 'relationId',
    allowNull: false
  }
});
```


## Deletando um registro
>Importar o model > Usar método destroy (DEFINA UM WHERE, ou DELETERÁ TUDO (?))
```js
modelImportado.destroy({
    where: {
        fieldID: 1
    }
}).then( /*callback...*/ )
```

## Atualizando um registro
```js
modelImportado.Update( 
    // {Campos: Valores} Que serão atualizados
    {
        field1: newValue1,
        field2: newValue2
    },
    where: {
        fieldId: fieldValueId   
    }).then( /*callback*/ )
```

## Join de tabelas
```js
modelImportado1.findOne({
    where: {
        field1: value1
    },
    // Aqui vem o joins, onde substituirá o 'modelImportado2' Para o model que desejar dar join
    
    include: [{model: modelImportado2}]
})
```


## Operador Or e And no sequelize
```js
import operators
    const { Op } = require("sequelize");

where: {
    [Op.and]: [ // OU [Op.or]: [
      { authorId: 12 },
      { status: 'active' }
    ]
}
// ASSIM TBM FUNCIONA
where: {
    authorId: {
      [Op.or]: [12, 13]
    }
}

//   LIKE
where: {
    field1: {
        [Op.like]: `%value%`
    }
}

```