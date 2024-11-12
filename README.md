# Demo QA Automation Project

Este projeto é uma automação de testes para a API de Book Store da Demo QA, utilizando **Cypress** e **Cucumber** com o padrão de projeto **Page Object Model (POM)**. 

## Estrutura do Projeto

- **cypress/e2e/features**: Arquivos `.feature` escritos em Gherkin, definindo os cenários de teste BDD.
- **cypress/e2e/step_definitions**: Step definitions que implementam os passos definidos nos arquivos `.feature`.
- **cypress/page_objects**: Objetos de página que encapsulam a interação com elementos específicos de cada página.
- **cypress/support**: Comandos customizados e cliente de API para requisições.

## Pré-requisitos

- Node.js
- npm ou yarn

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/VicRyan007/demoqa.git
   cd demoqa
