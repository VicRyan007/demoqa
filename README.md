```markdown
# Demo QA Automation Project

Este projeto realiza a automação de testes para a Book Store API da Demo QA, utilizando **Cypress** e **Cucumber**. A estrutura segue o padrão de projeto **Page Object Model (POM)** para testes de frontend e comandos personalizados para testes de backend. Esse setup permite automação de testes em **BDD** (Behavior-Driven Development), onde os cenários de teste são descritos em Gherkin para uma fácil compreensão.

## Estrutura do Projeto

- **cypress/e2e/features**: Arquivos `.feature` escritos em Gherkin, definindo cenários de teste para backend e frontend.
- **cypress/e2e/step_definitions**: Step definitions que implementam os passos definidos nos arquivos `.feature`, utilizando Cypress para a execução dos testes.
- **cypress/page_objects**: Objetos de página para o frontend, encapsulando a interação com elementos específicos de cada página.
- **cypress/support**: Comandos Cypress personalizados para requisições de API, configurações e possíveis clientes de API.

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

### Executando os Testes de Backend

Para executar os testes de API (backend), você pode rodar o Cypress em modo interativo ou em modo headless.

#### Modo Interativo

Este comando abre a interface do Cypress, onde você pode selecionar e visualizar a execução dos testes.

```bash
npm run cypress:open
```

#### Modo Headless

Este comando executa todos os testes automaticamente no terminal, gerando relatórios que podem ser revisados posteriormente.

```bash
npm run cypress:run
```

### Executando Testes Específicos

Para rodar um teste específico (por exemplo, `user_management.feature`):

```bash
npx cypress run --spec "cypress/e2e/features/user_management.feature"
```

## Descrição dos Testes de Backend

Os testes de backend cobrem os principais endpoints da **Book Store API**:

1. **Criar Usuário**
   - **Endpoint**: `POST /Account/v1/User`
   - **Descrição**: Valida se o usuário "Ryan Víctor" é criado com uma senha gerada automaticamente.

2. **Gerar Token de Acesso**
   - **Endpoint**: `POST /Account/v1/GenerateToken`
   - **Descrição**: Valida a geração do token JWT para o usuário criado.

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
   - **Descrição**: Verifica se os detalhes do usuário incluem os livros alugados.

## Estrutura de Variáveis e Configurações

O projeto utiliza variáveis de ambiente para armazenar `userId` e `token`, gerados durante a execução dos testes. Essas variáveis permitem a continuidade dos testes entre etapas, garantindo que as informações do usuário e o token de autenticação estejam disponíveis para operações subsequentes.

## Estrutura de Pastas e Arquivos

- **cypress/e2e/features**: Cada arquivo `.feature` define cenários de teste BDD em linguagem Gherkin, facilitando a compreensão dos testes por qualquer membro do time.
- **cypress/e2e/step_definitions**: Implementações dos passos dos cenários de teste, integrando com os comandos personalizados e APIs.
- **cypress/page_objects** (Frontend): Encapsula a interação com elementos visuais de cada página, utilizado apenas para testes de interface.
- **cypress/support/commands.js**: Contém comandos Cypress personalizados que simplificam as requisições de API, permitindo reutilizar as chamadas em vários cenários.

## Estrutura de Comandos Personalizados para Backend

Os testes de backend são implementados usando comandos Cypress personalizados para interagir com os endpoints da API. Abaixo estão alguns dos comandos principais:

- `cy.createUser()`: Cria um novo usuário com nome "Ryan Víctor" e senha gerada automaticamente.
- `cy.generateToken()`: Gera um token de autenticação para o usuário criado.
- `cy.authorizeUser()`: Verifica se o usuário criado possui autorização.
- `cy.listBooks()`: Obtém uma lista de todos os livros disponíveis.
- `cy.rentBooks(isbnList, userId, token)`: Aluga livros específicos para o usuário.
- `cy.getUserDetails(userId, token)`: Obtém os detalhes do usuário, incluindo os livros alugados.

Esses comandos são chamados dentro dos step definitions e encapsulam as chamadas para os endpoints da API, simplificando o código e facilitando a manutenção.

