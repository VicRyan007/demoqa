Feature: Gerenciamento de Usuário na Book Store

  Scenario: Criar um usuário
    Given a API de criação de usuário está disponível
    When eu crio um usuário com "username_test" e "Password@123"
    Then o usuário é criado com sucesso

  Scenario: Gerar um token de acesso
    Given a API de geração de token está disponível
    When eu gero um token para o usuário com "username_test" e "Password@123"
    Then o token é gerado com sucesso

  Scenario: Confirmar autorização do usuário
    Given a API de autorização de usuário está disponível
    When eu verifico a autorização do usuário com "username_test" e "Password@123"
    Then o usuário está autorizado

  Scenario: Listar os livros disponíveis
    Given a API de listagem de livros está disponível
    When eu obtenho a lista de livros
    Then a lista de livros é retornada com sucesso

  Scenario: Alugar dois livros
    Given o usuário está autenticado
    When eu alugo os livros com ISBN "9781449331818" e "9781449365035"
    Then os livros são alugados com sucesso

  Scenario: Listar os detalhes do usuário com livros alugados
    Given o usuário está autenticado
    When eu obtenho os detalhes do usuário
    Then os detalhes do usuário incluem os livros alugados
