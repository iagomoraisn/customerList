Descrição
Esta aplicação é um sistema simples de cadastro de clientes, desenvolvido usando TypeScript, MongoDB, Prisma e Node.js. Ele permite a adição e exclusão de clientes através de rotas definidas.

Pré-requisitos
Node.js instalado
MongoDB instalado e em execução
Instalação
Clone o repositório:

bash
Copy code
git clone https://github.com/seu-usuario/sua-aplicacao.git
Instale as dependências:

bash
Copy code
cd sua-aplicacao
npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e configure as variáveis necessárias. Veja um exemplo:

env
Copy code
PORT=3000
MONGO_URI=mongodb://localhost:27017/nome-do-banco-de-dados
Configuração do Banco de Dados
Certifique-se de que o MongoDB está em execução.

Execute as migrações do Prisma para configurar o banco de dados:

bash
Copy code
npx prisma migrate dev
Uso
Inicie a aplicação:

bash
Copy code
npm start
A aplicação estará disponível em http://localhost:3000 (ou a porta configurada).

Acesse as rotas para gerenciar clientes:

POST /clientes: Adiciona um novo cliente.
DELETE /clientes/:id: Exclui um cliente pelo ID.
Estrutura do Projeto
src/: Código-fonte da aplicação.
prisma/: Configuração do Prisma e migrações.
dist/: Código transpilado.
Contribuição
Sinta-se à vontade para contribuir para este projeto. Abra uma issue ou envie um pull request!
