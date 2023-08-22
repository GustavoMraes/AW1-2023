//LISTA 10 - OBJETOS

//Exercício 1

class Pessoa {
   nome;
   idade;
   sexo;
  
    apresentar() {
      console.log(
        "Olá! Meu nome é " + this.nome + " eu tenho " + this.idade + " anos, do sexo " + this.sexo);
    }
  }
  let Gustavo = new Pessoa();
  Gustavo.nome = "Gustavo";
  Gustavo.idade = "17";
  Gustavo.sexo = "masc"
  Gustavo.apresentar();

  // Exercício 2

  class Retangulo{

    altura;
    largura

    area(){
      return this.altura*this.largura;
    }

  }

  let Ret = new Retangulo();
  Ret.altura = 3;
  Ret.largura = 2;
  console.log(Ret.area())