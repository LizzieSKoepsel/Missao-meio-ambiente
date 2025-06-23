const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você se depara com o crecimento do desmatamento!",

        alternativas: [
            {
                texto: "Isso é assustador",
                afirmacao: "afirmaçao"
            },
            {
                texto: "Isso é maravilhoso",
                afirmacao: "afirmaçao"
            }

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
            {
                texto: "Isso é maravilhoso",
                afirmacao: "afirmaçao"
            }

        ]
    },
];

let atual = 0;
let perguntaAtual;


function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}



function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function () {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);

    }

}


mostraPergunta();