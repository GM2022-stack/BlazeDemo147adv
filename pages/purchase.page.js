//export default class PurchasePage {
class PurchasePage {
    constructor(page){
        this.page = page
        this.url = '/purchase\.php/'
        this.nome = '#inputName'
        this.bandeira = '#cardType'
        this.remenber = '#rememberMe'
        this.btn_purchase_flight = 'btn.btn-primary'    
    }

    // Como neste mapeamento estou seguindo o padrão, não inclui verificação

    async preencher_nome(nome){
        await this.page.locator(this.nome).fill(nome)
    }

    async selecionar_bandeira(bandeira){
        await this.page.locator(this.bandeira).selectOption(bandeira)
    }

    async marcar_lembrete(){
        await this.page.locator(this.remenber).check()
    }

    async comprar_passagem(){
        await this.page.locator(this.btn_purchase_flight).click()
    }


}

module.exports = PurchasePage