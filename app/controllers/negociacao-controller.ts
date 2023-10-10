import { diasDaSemana } from "../enums/diasDaSemana.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {
    private inputData :HTMLInputElement
    private inputQuantidade :HTMLInputElement
    private inputValor :HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView("[data-negociacoes-views]")
    private mensagemView = new MensagemView("#mensagemView")
    

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes  )
    }

    adiciona() : void {
        const negociacao = this.criaNegociacao()
        if(!this.diaUtil(negociacao.data) ) {
            this.mensagemView.update('São aceitas apenas negociações feitas em dias úteis') 
            return}
        this.negociacoes.adiciona(negociacao)
        this.atualizaView()
        this.limparForm()
        
        

    }

    private diaUtil ( data: Date) {
        return data.getDay() > diasDaSemana.Domingo && data.getDay() < diasDaSemana.Sabado
    }

    private criaNegociacao() : Negociacao {
        const exp = /-/g // Uma expressão regular que vai buscar todos os "-", e add o "g" para ela fazer a global find
        const date = new Date(this.inputData.value.replace(exp, ',')) // Cria uma data quando a função for chamada
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(date,quantidade,valor )
    }

    limparForm() :void {
            this.inputData.value = ""
            this.inputQuantidade.value = ""
            this.inputValor.value = ""
            this.inputData.focus() // Para o foco retornar ao inputData

    }

    private atualizaView () : void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação adicionada com sucesso!")
    }

}
