#language: pt
Funcionalidade: Comprar passagem
    Cenario: Compra com Sucesso
        Dado que estou no site Blazedemo
        Quando seleciono a origem como "São Paolo" 
        E o Destiono como "London"
        E clico no botão "Find Flights"
        Entao verifico o texto "Flights from São Paolo to London:"
        E se a url contem "reserve"
        Quando seleciono o voo "9696" da companhia "Aer Lingus"
        Entao verifico se a url contem "purchase"
        Quando preencho o nome como "Guilherme"
        E seleciono a bandeira do cartao como "amex"
        E marco a opcao "Remember me"
        E clico no botao "Purchase Flight"
        Entao verifico se a url contem "confirmation"
        E se exibe a mensagem de agradecimento "Thank you for your purchase today!"
        E se contem a informacao "Amount" como "555 USD"

        