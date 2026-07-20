import { Given, When, Then, And } from '@cucumber/cucumber'
import HomePage from '../pages/home.page'
import ReservePage from '../pages/reserve.page'
import PurchasePage from '../pages/purchase.page'
import ConfirmationPage from '../pages/confirmation.page'

Given('que estou no site Blazedemo', function ( {page} ) {
    page.goto(HomePage.url) // abre o Browser neste endereço
    HomePage.verificar_mensagem_boas_vindas() // confirma se aparece a mensagem inicial
});

When('seleciono a origem como {string}', function (origem) {
    HomePage.selecionar_origem(origem)
});

And('seleciono o Destino como {string}', function (destino) {
    HomePage.selecionar_destino(destino)
});

// Verão que clica no botão a partit do texto escrito no botão
And('clico no botão {string}', function (texto_botao) {
    HomePage.clicar_Find_flights(texto_botao)
});

// Exemplo
// Se for sempre clicar no botão olhando apenas o seletor 
And('clico no botao', function (texto_botao) {
    // Não precisaria ter recebido o paramentro, seria só dar instrução de clicar 
    HomePage.clicar_Find_flights()
});

// Cerário simples
Then('verifico o texto {string}', function (mensagem_origem_destino){
    ReservePage.verificar_titulo(mensagem_origem_destino)
});


And('clico no botao "Find Flights"', function (texto_botao) {
   Page.getByRole('button')
});



When('seleciono o voo {string} da companhia {string}', function (string, string2) {

});



Then('verifico se a url contem {string}', function (string) {

});



When('preencho o nome como {string}', function (string) {

});



When('seleciono a bandeira do cartao como {string}', function (string) {

});



When('marco a opcao {string}', function (string) {

});



When('clico no botao {string}', function (string) {

});



Then('verifico se a url contem {string}', function (string) {

});



Then('se exibe a mensagem de agradecimento {string}', function (string) {

});



Then('se contem a informacao {string} como {string}', function (string, string2) {

});


Then('verifico o texto Flights from {string} to {string}', function (string, string2) {

});

