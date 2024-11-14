---

# Demo QA Automation Project

Este projeto realiza a automação de testes para a API Book Store, utilizando **Cypress**. A estrutura do projeto utiliza **Page Object Model (POM)** para testes de frontend e comandos personalizados para testes de backend. Esse setup permite automação de testes com uma estrutura organizada e reutilizável.

## Estrutura do Projeto

- **cypress/e2e**: Arquivos de teste Cypress para backend e frontend.
- **cypress/page_objects**: Objetos de página para o frontend, encapsulando a interação com elementos específicos de cada página.
- **cypress/support**: Comandos Cypress personalizados para requisições de API e configurações adicionais.

## Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** ou **yarn**

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/VicRyan007/demoqa.git
   cd demoqa
   ```
   
2. Instale as dependências:

   ```bash
   npm install
   ```

## Executando os Testes

Para executar os testes de API (backend), você pode rodar o Cypress em modo interativo ou em modo headless.

### Modo Interativo

Este comando abre a interface do Cypress, onde você pode selecionar e visualizar a execução dos testes.

```bash
npx cypress open
```

### Modo Headless

Este comando executa todos os testes automaticamente no terminal, gerando relatórios que podem ser revisados posteriormente.

```bash
npx cypress run
```

## Descrição dos Testes de Backend

Os testes de backend cobrem os principais endpoints da **Book Store API**:

1. **Criar Usuário**
   - **Endpoint**: `POST /Account/v1/User`
   - **Descrição**: Valida a criação de um novo usuário com nome gerado aleatoriamente.

2. **Gerar Token de Acesso**
   - **Endpoint**: `POST /Account/v1/GenerateToken`
   - **Descrição**: Valida a geração de um token JWT para o usuário criado.

3. **Confirmar Autorização**
   - **Endpoint**: `POST /Account/v1/Authorized`
   - **Descrição**: Verifica se o usuário criado está autorizado, confirmando a resposta `true` ou `false`.

4. **Listar Livros Disponíveis**
   - **Endpoint**: `GET /BookStore/v1/Books`
   - **Descrição**: Verifica se a lista de livros é retornada com sucesso.

5. **Alugar Livros**
   - **Endpoint**: `POST /BookStore/v1/Books`
   - **Descrição**: Aluga dois livros específicos para o usuário autenticado.

6. **Obter Detalhes do Usuário com Livros Alugados**
   - **Endpoint**: `GET /Account/v1/User/{userID}`
   - **Descrição**: Verifica se os detalhes do usuário incluem os livros alugados e exibe as informações do usuário e dos livros alugados separadamente.

## Estrutura de Variáveis e Configurações

O projeto utiliza variáveis de ambiente para armazenar `userId` e `token`, gerados durante a execução dos testes. Essas variáveis permitem a continuidade dos testes entre etapas, garantindo que as informações do usuário e o token de autenticação estejam disponíveis para operações subsequentes.

## Estrutura de Pastas e Arquivos

- **cypress/e2e**: Cada arquivo `.cy.js` define cenários de teste para os endpoints da API, estruturados para execução com Cypress.
- **cypress/page_objects** (Frontend): Encapsula a interação com elementos visuais de cada página, utilizado apenas para testes de interface.
- **cypress/support/commands.js**: Contém comandos Cypress personalizados que simplificam as requisições de API, permitindo reutilizar as chamadas em vários cenários.

## Estrutura de Comandos Personalizados para Backend

Os testes de backend são implementados usando comandos Cypress personalizados para interagir com os endpoints da API. Abaixo estão alguns dos comandos principais:

- `cy.createUser()`: Cria um novo usuário com nome gerado aleatoriamente.
- `cy.generateToken()`: Gera um token de autenticação para o usuário criado.
- `cy.authorizeUser()`: Verifica se o usuário criado possui autorização.
- `cy.listBooks()`: Obtém uma lista de todos os livros disponíveis.
- `cy.rentBooks(isbnList, userId, token)`: Aluga livros específicos para o usuário.
- `cy.getUserDetails(userId, token)`: Obtém os detalhes do usuário, incluindo os livros alugados.

Esses comandos são chamados dentro dos arquivos de teste e encapsulam as chamadas para os endpoints da API, simplificando o código e facilitando a manutenção.

## Exemplo de Execução e Logs

Os testes exibem logs relevantes diretamente no terminal, incluindo informações de criação de usuário, geração de token, autorização, listagem de livros disponíveis, detalhes dos livros alugados, e detalhes do usuário com livros alugados. Esses logs facilitam o monitoramento e análise dos resultados dos testes.

---