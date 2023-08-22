// LISTA 09 - FUNÇÕES
//Exercício 1
ex1 = function escreva(texto) {
    console.log(texto)
}
ex1("OLAAAAAAAaaaa")

//Exercício 2
function soma(x, y) {
    return (x+y);
}
console.log(soma(10, 5));

//Exercício 3

function hora() {
    let data = new Date();
    return (data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
  }
  console.log(hora());

  //Exercício 4

  function mostrarHoras() {
    let data = new Date();
    console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
  }

  mostrarHoras();

  //Exercício 5

  function quadrado(num) {
       return num*num; 
  }
  console.log (quadrado(5));

  //Exercício 6

  function cubo(num) {
    return num*num*num
  }
  console.log (cubo(4));

  //Exercício 7

  function potencial(num, expoente) {
    return num**expoente
  }
  console.log (potencial(3,4))

    //Exercício 8
    function potencia(num, expoente) {
        if (expoente == 1){
            return num;
        }
        else {
            return potencia(num, expoente-1) * num;
        }
    }
    console.log(potencia(2,4))



