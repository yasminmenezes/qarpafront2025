#language: pt

Funcionalidade: Validação da funcionalidade de aprovação ou reprovação
    Descrição da funcionalidade: Cenários voltados para os -caminhos felizes- da solicitação de crédito

    Cenário: Validação dos camos obrigatórios
        Dado que eu acesse a página de solicitação de crédito
        Quando eu preencher os campos obrigatórios com dados válidos
        E eu clico em "Solicitar crédito"
        Então o sistema irá informar que houve uma solicitação
