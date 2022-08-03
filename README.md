# Challenge PurpleCats

### Resumo
O Objetivo deste desafio é a construção de uma aplicação, utilizando a arquitetura de microsserviços, que contém as funções/métodos de saque e depósito de valores.
### Instalação

> Para instalar todas as dependências:
```
 npm install
```
> Para resetar o Banco de Dados:
> - sequelize-cli é utilizado como dependendência de desenvolvimento para esse comando.
```
 npm run db:reset
```

> Para rodar a aplicação
> - nodemon é utilizado como dependendência de desenvolvimento para esse comando:
```
 npm run dev
```
### Observações
 - Existe um arquivo **.env.example** com as variáveis de ambiente necessárias para a configuração de acesso ao Banco de Dados.
 Remova o *.example* do arquivo determine os valores das variáveis conforme suas necessidades para utilizar.
```
  DB_USER=seu-nome-de-usuario   // Exemplo: root.
  DB_PASSWORD=sua-senha-do-DB
  DB_DATABASE=nome-do-DB
  DB_HOST=localhost
  PORT=3306   // Porta padrão do MySQL.
  SECRET=chave-secreta    // Utilizada para criar a assinatura do token e verificar a assinatura.
```


### Tecnologias
> - Node.js
> - MySQL
> - Express.js
> - Sequelize
> - Http-Status-Codes

## Autor
 - Bruno Ribeiro - *Desenvolvedor Fullstack Júnior* [brunocsrribeiro](https://github.com/brunocsrribeiro)

### Observações finais

*__Dentro do Banco de Dados existem dados fictícios utilizados apenas para a execução do desafio. Quaisquer semelhanças existentes serão meras coincidências.__* 