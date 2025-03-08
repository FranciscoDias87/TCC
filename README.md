# Gerenciador de Controle de Caixa para Unidades Lotéricas

Este projeto é um backend Node.js com Express.js desenvolvido para um trabalho de conclusão de curso, com o objetivo de criar um sistema de gerenciamento de controle de caixa para unidades lotéricas.

## Funcionalidades

* Cadastro e gerenciamento de eventos (transações) de caixa.
* Cadastro e gerenciamento de usuários (operadores de caixa).
* Listagem de eventos de caixa por período e operador.
* Cálculo de saldo de caixa.
* Autenticação de usuários.

## Tecnologias

* Node.js
* Express.js
* MySQL
* bcrypt (para criptografia de senhas)

## Pré-requisitos

* Node.js instalado
* MySQL instalado

## Instalação

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/FranciscoDias87/TCC.git](https://www.google.com/search?q=https://github.com/FranciscoDias87/TCC.git)
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd TCC
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

4.  Configure as variáveis de ambiente:

    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione as seguintes variáveis de ambiente, substituindo os valores pelos seus dados:

        ```
        DB_HOST=localhost
        DB_USER=seu_usuario
        DB_PASSWORD=sua_senha
        DB_DATABASE=seu_banco_de_dados
        ```

5.  Crie o banco de dados e execute as migrações:

    * Crie um banco de dados MySQL com o nome especificado na variável `DB_DATABASE`.
    * Execute os scripts SQL para criar as tabelas necessárias (os scripts devem estar na pasta db).

6.  Execute o servidor:

    ```bash
    npm start
    ```

## Rotas

* `GET /eventos`: Lista todos os eventos de caixa.
* `POST /eventos`: Cria um novo evento de caixa.
* `GET /eventos/:id`: Obtém um evento de caixa específico.
* `PUT /eventos/:id`: Atualiza um evento de caixa.
* `DELETE /eventos/:id`: Exclui um evento de caixa.
* `GET /usuarios`: Lista todos os usuários.
* `POST /usuarios`: Cria um novo usuário.
* `POST /login`: Autentica um usuário.

## Banco de Dados

* MySQL

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Abra uma issue para relatar bugs ou solicitar novas funcionalidades.

## Licença

Este projeto está sob a licença.
