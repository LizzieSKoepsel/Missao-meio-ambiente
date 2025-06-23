
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:
            "Quando você se depara com o crecimento do desmatamento!",

        alternativas: [
            {
                texto: "Isso é assustador",
                afirmacao: "afirmaçao"
            },

        ]
    },
    {
        enunciado:
            "Pergunta 1",
        alternativas: [
            {
                texto: "Isso é assustador",
                afirmacao: "afirmaçao"
            },

        ]
    },
];

let atual = 0;
let perguntaAtual;


function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;   
    }
    


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function () {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);

    }

}


mostraPergunta();