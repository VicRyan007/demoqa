# Demo QA Automation Project

Este projeto realiza a automação de testes para a API de Book Store da Demo QA, utilizando **Cypress**.

## Estrutura do Projeto

- **cypress/e2e/user_management.cy.js**: Contém os testes de API para o gerenciamento de usuário.
- **cypress/support/commands.js**: Comandos personalizados para simplificar as requisições e interações com a API.
- **cypress/support/e2e.js**: Arquivo de suporte que carrega comandos personalizados antes dos testes.

## Pré-requisitos

- Node.js
- npm ou yarn

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/SeuUsuario/demoqa-automation.git
   cd demoqa-automation
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Executando os Testes

Para abrir a interface do Cypress:

```bash
npm run test
```

Para executar os testes em modo headless:

```bash
npm run test:headless
```

## Estrutura dos Testes

Os testes de gerenciamento de usuário cobrem as seguintes funcionalidades:

1. **Criação de Usuário**: Testa a criação de um novo usuário.
2. **Geração de Token de Acesso**: Gera um token JWT para o usuário criado.
3. **Autorização do Usuário**: Verifica se o usuário possui autorização.
4. **Listagem de Livros**: Retorna uma lista de livros disponíveis.
5. **Aluguel de Livros**: Aluga dois livros para o usuário.
6. **Detalhes do Usuário**: Verifica os detalhes do usuário e os livros alugados.

## Licença

Este projeto é apenas para fins de demonstração.
