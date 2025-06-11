const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você se depara com o crecimento do dematamento!", 
        alternativas:[
            "Isso é assustador", 
            "Isso é normal!"
        ]
    },
    {
        enunciado: "Pergunta 1", 
        alternativas:[
            "Alternativa 1",
            "Alternativa 2"
        ]
    };
];
  
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;


}

mostraPergunta()