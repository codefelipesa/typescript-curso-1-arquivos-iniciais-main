import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController()

const getForm = document.querySelector('[data-form]')
getForm.addEventListener('submit', e => {
    e.preventDefault()
    controller.adiciona()
}) 

