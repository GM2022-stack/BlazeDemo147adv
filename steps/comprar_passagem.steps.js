const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test')

// import { Given, When, Then, And } from '@cucumber/cucumber'
// import this.homePage from '../pages/home.page'
// import this.reservePage from '../pages/reserve.page'
// import this.purchasePage from '../pages/purchase.page'
// import this.confirmationPage from '../pages/confirmation.page'

Given('que estou no site Blazedemo', async function () {
    await this.page.goto(this.homePage.url) // abre o Browser neste endereço
    await this.homePage.verificar_mensagem_boas_vindas() // confirma se aparece a mensagem inicial
});

When('seleciono a origem como {string}', async function (origem) {
    await this.homePage.selecionar_origem(origem)
});

When('o Destino como {string}', async function (destino) {
    await this.homePage.selecionar_destino(destino)
});

// Verão que clica no botão a partit do texto escrito no botão
When('clico no botao {string}', async function (texto_botao) {
    await this.homePage.clicar_Find_flights(texto_botao)
});

// Exemplo
// Se for sempre clicar no botão olhando apenas o seletor 
When('clico no botao', async function (texto_botao) {
    // Não precisaria ter recebido o paramentro, seria só dar instrução de clicar 
    await this.homePage.clicar_Find_flights()
});

// Cerário simples - Verifica a mensagem de cidade de origem e destino
Then('verifico o texto {string}', async function (mensagem_origem_destino){
    await this.reservePage.verificar_titulo(mensagem_origem_destino)
});


// When('clico no botao "Find Flights"', async function (texto_botao) {
//    await this.Page.getByRole('button')
// });


When('seleciono o voo {string} da companhia {string}', async function (voo, companhia) {
    await this.reservePage.selecionar_voo(voo, companhia)
});


When('preencho o nome como {string}', async function (nome) {
    await this.purchasePage.preencher_nome(nome)
});


When('seleciono a bandeira do cartao como {string}', async function (bandeira) {
    await this.purchasePage.selecionar_bandeira(bandeira)
});


When('marco a opcao {string}', async function (string) {
    // Não estou usando o parametro que é recebido neste bloco
    await this.purchasePage.marcar_lembrete()
});


// When('clico no botao {string}', async function (string) {
//     // Não estou usando o parametro que é recebido neste bloco
//    await this.purchasePage.comprar_passagem()
// });


Then('verifico se a url contem {string}', async function (pagina) {
    await expect(this.page).toHaveURL(`/${pagina}\.php`)
});


Then('se exibe a mensagem de agradecimento {string}', async function (string) {
    await expect(this.page.locator(this.confirmationPage.mensagem)).toHaveText('Thank you for your purchase today!')
});


Then('se contem a informacao {string} como {string}', async function (quantia, preco) {
    // encontra a linha em que está escrita a quantia / "Amount"
    const linha_preco = await this.page.locator('tr').filter({ has: this.page.locator('td', { hasText: quantia })})
    // na linha selecionada, verifica se contém o valor/preco
    await expect(linha_preco).toContainText(preco)
});


// Esquema de Cenário - Verifica a mensagem contendo as duas cidades que recebe como paramentro
Then('verifico o texto Flights from {string} to {string}', async function (origem, destino) {
    await expect(this.page.locator(this.reservePage.titulo)).toHaveText(`Flights from ${origem} to ${destino}:`)
});

