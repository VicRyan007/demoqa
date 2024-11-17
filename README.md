### Updated README

# Demo QA Automation Project

Este projeto realiza a automação de testes para a **Book Store API** e funcionalidades de frontend utilizando **Cypress**. O projeto segue os princípios do **Page Object Model (POM)** para organização e reutilização do código.

## Estrutura do Projeto

- **cypress/e2e/features/backend**: Testes de integração com a API da Book Store.
- **cypress/e2e/features/frontend**: Testes de interface (frontend) automatizados.
- **cypress/page_objects**: Contém os arquivos Page Object encapsulando ações de interação para diferentes páginas.
- **cypress/support**: Comandos Cypress personalizados e configurações globais.

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

### Testes de Backend

Os testes de backend validam as principais funcionalidades da API da Book Store, como criação de usuários, autenticação e manipulação de dados relacionados a livros.

1. Execute os testes de backend no modo headless:

   ```bash
   npx cypress run --spec "cypress/e2e/features/backend/user_management.cy.js"
   ```

#### Endpoints Testados

- **Criação de Usuário**:
  - Endpoint: `POST /Account/v1/User`
  - Valida a criação de um usuário com um nome único e senha forte.

- **Geração de Token**:
  - Endpoint: `POST /Account/v1/GenerateToken`
  - Verifica a geração de um token JWT para autenticação.

- **Verificação de Autorização**:
  - Endpoint: `POST /Account/v1/Authorized`
  - Confirma se as credenciais fornecidas são válidas.

- **Listagem de Livros**:
  - Endpoint: `GET /BookStore/v1/Books`
  - Retorna uma lista de livros disponíveis na biblioteca.

- **Aluguel de Livros**:
  - Endpoint: `POST /BookStore/v1/Books`
  - Aluga dois livros para o usuário autenticado.

- **Detalhes do Usuário**:
  - Endpoint: `GET /Account/v1/User/{userId}`
  - Verifica se os livros alugados estão associados ao usuário correto.

### Testes de Frontend

#### Modos de Execução

Os testes podem ser executados em modo interativo ou headless.

##### Modo Interativo

Abre a interface do Cypress para visualizar os testes:

```bash
npx cypress open
```

##### Modo Headless

Executa todos os testes no terminal:

```bash
npx cypress run
```

#### Funcionalidades Testadas

1. **Practice Form**:
   - Preenche um formulário de prática com valores dinâmicos.
   - Faz o upload de um arquivo `.txt` e valida a submissão do formulário.

2. **Browser Windows**:
   - Valida a abertura de uma nova janela e verifica o conteúdo exibido.

3. **Widgets - Progress Bar**:
   - Controla o carregamento da barra de progresso, validando valores específicos e o comportamento do botão `Reset`.

4. **Sortable - Lista e Grid**:
   - Ordena os elementos em uma lista e em uma grade utilizando métodos de drag and drop.

5. **Web Tables**:
   - Manipula dados em tabelas, como adição, edição e exclusão de registros.

## Estrutura de Page Objects

Os arquivos na pasta `cypress/page_objects` encapsulam as interações com elementos da página, garantindo reutilização e organização do código.

- **PracticeFormPage.js**: Métodos para preencher e validar o formulário.
- **BrowserWindowsPage.js**: Métodos para validar a abertura de novas janelas.
- **ProgressBarPage.js**: Métodos para manipular a barra de progresso.
- **SortablePage.js**: Métodos para ordenação de elementos na lista e grid.
- **WebTablesPage.js**: Métodos para manipulação de dados na tabela.


---

Este projeto foi desenvolvido para demonstrar habilidades em automação de testes utilizando Cypress. 