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
                texto:"Isso é assustador",
                afirmacao:"afirmaçao"
            }, 
            {
             texto:"Isso é normal!",
             afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado:
         "Pergunta 1", 
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ],
    },
];
  
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;


}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        caixaAlternativa.appendChild(botaoAlternativa);
    }
}
mostraPergunta();