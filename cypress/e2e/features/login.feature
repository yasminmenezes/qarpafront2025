#language: pt

# 1 Login válido (user e senha válidos)
# - Login inválido
#   2 User invalido e senha valida
#   3 User válido e senha inválida
#   4 User vazio e senha válida
#   5 User válido e senha vazia
# 6 Usuário bloqueado
# 7 Usuário com problema

Funcionalidade: Validação de login
    Cenários voltados para os testes de login do saucedemo

Contexto: O usuário deve estar na página de login do saucedemo
     Dado que eu acesse a página de login do Saucedemo

    # Cenário: Validação de login válido
    #     Quando eu preencher o campo login "standard_user"
    #     E eu preencher o campo senha "secret_sauce"
    #     E eu clicar no botão "LOGIN"
    #     Então o sistema irá para a tela de "Catálogo de Produtos"   

    Cenário: Validação de Login com Diferentes Tipos de Usuários
        Quando eu preencho os campos de usuário e senha com o usuário "standard_user"
        E eu clico no botão "LOGIN"
        Então eu devo ser redirecionado para a tela de "Catálogo de Produtos"