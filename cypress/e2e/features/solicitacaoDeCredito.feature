#language: pt

Funcionalidade: Validação da funcionalidade de aprovação ou reprovação
    Descrição da funcionalidade: Cenários voltados para os -caminhos felizes- da solicitação de crédito

Contexto: O usuário está logado e tem permissão para aprovar ou reprovar solicitações
    Dado que eu acesse a página de solicitação de crédito

    # Cenário: Validação dos campos obrigatórios
    #     Quando eu preencher os campos obrigatórios com dados válidos
    #     E eu clico em "Solicitar Crédito"
    #     Então o sistema irá informar que houve uma solicitação

    # Cenário: Análise de aprovação para clientes dentro do padrão de aprovação
    #     Quando eu preencho os dados do cliente com nome "Yasmin Menezes", email "yasminmsmenezes@gmail.com", renda mensal "3000", CPF "123.456.789-10" e valor de crédito "3000"
    #     E eu clico em "Solicitar Crédito"
    #     Então o sistema irá informar que a solicitação foi "APROVADA"

    # Cenário: Análise de aprovação para clientes dentro do padrão de reprovação
    #     Quando eu preencho os dados do cliente com nome "Yasmin Menezes", email "yasminmsmenezes@gmail.com", renda mensal "1000", CPF "123.456.789-10" e valor de crédito "3000"
    #     E eu clico em "Solicitar Crédito"
    #     Então o sistema irá informar que a solicitação foi "REPROVADA"
  
    # Esquema do Cenário: Análise de crédito para clientes
    #     Quando um cliente solicitar um crédito de <ValorCredito> com uma renda mensal de <Renda>
    #     E eu clico em "Solicitar Crédito"
    #     Então o sistema irá informar que a solicitação foi <Resultado>

    #     Exemplos:
    #     |Perfil         | ValorCredito | Renda  | Resultado   |
    #     | "Renda alta"  | "3000"       | "3000" | "APROVADA"  |
    #     | "Renda baixa" | "3000"       | "1000" | "REPROVADA" |

    # Esquema do Cenário: Análise de crédito para clientesMore actions
    #     Quando um cliente aleatório solicitar um crédito de <ValorCredito> com uma renda mensal de <Renda>
    #     E eu clico em "Solicitar Crédito"
    #     Então o sistema irá informar que a solicitação foi <Resultado>

    #     Exemplos:
    #     | Perfil        | ValorCredito  | Renda    | Resultado    |
    #     | "Renda alta"  | "3000"        | "3000"   | "APROVADA"   |
    #     | "Renda baixa" | "2000"        | "1000"   | "REPROVADA"  |

    Esquema do Cenário: Análise de crédito para clientes
        Quando eu preencho o formulário com o perfil <perfilCompartilhado> do arquivo <solicitacaoDeCredito>
        E eu clico em "Solicitar Crédito"
        Então o sistema irá informar que a solicitação foi <perfilCompartilhado>

        Exemplos:
        | Perfil        | perfilCompartilhado  
        | "Renda alta"  | "solicitacaoCredito"        
        | "Renda baixa" | "solicitacaoCredito"        