 #  **Verificação de Cartão de Crédito** 

- Neste projeto, foi desenvolvida uma biblioteca que verifica CARTÃO DE CRÉDITO retornando true ou false. 

- Para realização desse projeto, foi utilizado JavaScript ES6, e para testes, mocha e chai, e para testar cobertura, o NYC. 


  ## **Como instalar:** 
```sh
$ npm instal card-validator-leticia
```

  ## **Como utilizar:** 
   #### Exemplo que retorna true:
```sh
> const cpfValidator = require("card-validator-leticia"); 
> cardValidator('5436535407089810')
> // return "true"
```
   #### Exemplo que retorna false:
```sh
> const cpfValidator = require("card-validator-leticia"); 
> cardValidator('5436535407089818')
> // return "false"
```

  ## **Roadmap oficial do projeto:**
  #### versão 1.0.0 (released)
  - funcionalidades: valida cartões de crédito, retornando true ou false.