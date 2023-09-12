var nome = prompt("Digite seu nome");
var idade = parseInt(prompt("Digite sua idade"));
var notaLPL = parseFloat(prompt("Digite sua nota em LPL"));
var notaMAT = parseFloat(prompt("Digite sua nota em MAT"));
var notaAW1 = parseFloat(prompt("Digite sua nota em AW1"));
var ano = parseInt(prompt("Digite algum ano no futuro"));
var color = prompt("Digite a sua cor favorita, em inglês");










document.getElementById("AnoFuturo").textContent = ano;
document.getElementById("nome").textContent = nome;
document.getElementById("idade").textContent = idade;

document.getElementById("notaPt").textContent = notaLPL;
document.getElementById("notaMat").textContent = notaMAT;
document.getElementById("notaWeb").textContent = notaAW1;




class Pessoa {

    constructor(nome, idade, notaLPL, notaMAT, notaAW1, color){
        this.nome = nome;
        this.idade = idade;
        this.notaLPL = notaLPL;
        this.notaMAT = notaMAT;
        this.notaAW1 = notaAW1;
        this.color = color;        
    }

    calcularMedia(){
        return (notaLPL + notaMAT + notaAW1)/3;
    }

    calcularIdade(ano){
        return idade + (ano-2023);
    }
}

let usuario = new Pessoa(nome, idade, notaLPL, notaMAT, notaAW1, color);

document.getElementById("idadeFutura").textContent = usuario.calcularIdade(ano);

document.getElementById("media").textContent = usuario.calcularMedia();

let textos = document.querySelectorAll('h2');

textos.forEach((texto) => {
  texto.style.color = color;
})

let colunas = document.querySelectorAll('th');

colunas.forEach((coluna) => {
  coluna.style.backgroundColor = color;
})


let numerosSeparados = prompt('Digite 9 números separados por um espaço " ":').split(' ');

function alterarQuadro() {
    for (i = 0; i < numerosSeparados.length; ++i) {
        document.getElementsByClassName('numero')[i].textContent = numerosSeparados[i];
      }
}
alterarQuadro();


