#language: pt

# 1 Login válido (user e senha válidos)
# - Login inválido
#   2 User invalido e senha valida
#   3 User válido e senha inválida
#   4 User vazio e senha válida
#   5 User válido e senha vazia
# 6 Usuário bloqueado
# 7 Usuário com problema

@login
Funcionalidade: Validação de login
    Cenários voltados para os testes de login do saucedemo

Contexto: O usuário deve estar na página de login do saucedemo
     Dado que eu acesse a página de login do Saucedemo

    # Cenário: Validação de login válido
    #     Quando eu preencher o campo login "standard_user"
    #     E eu preencher o campo senha "secret_sauce"
    #     E eu clicar no botão "LOGIN"
    #     Então o sistema irá para a tela de "Catálogo de Produtos"   

    @login_valido
    Cenário: Validação de Login com usuário válido
        Quando eu preencho os campos de usuário e senha com o usuário "standard_user"
        E eu clico no botão "LOGIN"
        Então eu devo ser redirecionado para a tela de "Catálogo de Produtos"

    @login_invalido
    Esquema do Cenário: Validação de Login com credenciais inválidas com mensagens
        Quando eu preencho os campos de usuário e senha com o usuário <perfis_invalidos>
        E eu clico no botão "LOGIN"
        Então o sistema deve exibir a mensagem de erro <mensagem>

        Exemplos:
            |perfis_invalidos   | mensagem                                                    |
            |"locked_out_user"    |"Epic sadface: Sorry, this user has been locked out."                      |
            |"usuario_vazio"      |"Epic sadface: Username is required"                                       |
            |"senha_vazia"        |"Epic sadface: Password is required"                                       |
            |"usuario_invalido"   |"Epic sadface: Username and password do not match any user in this service"|
            |"senha_invalida"     |"Epic sadface: Username and password do not match any user in this service"|

    @login_invalido  
    Esquema do Cenário: Validação de Login com credenciais inválidas com perfil
        Quando eu preencho os campos de usuário e senha com o usuário <perfil_usuario>
        E eu clico no botão "LOGIN"
        Então o sistema deve exibir a mensagem de erro <perfil_usuario>

        Exemplos:
            |perfil_usuario     |
            |locked_out_user    |
            |usuario_vazio      |
            |senha_vazia        |
            |usuario_invalido   |
            |senha_invalida     |