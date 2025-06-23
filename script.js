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
let historiaFinal = "";


function mostraPergunta() {
    if(atual >= perguntas.length){
      mostraResultado();
      return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}



function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);

    }

}
function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
       
}
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049.......";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();