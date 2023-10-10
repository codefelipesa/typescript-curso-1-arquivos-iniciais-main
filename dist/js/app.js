import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const getForm = document.querySelector('[data-form]');
getForm.addEventListener('submit', e => {
    e.preventDefault();
    controller.adiciona();
});
