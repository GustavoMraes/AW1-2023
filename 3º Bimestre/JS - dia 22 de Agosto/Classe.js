class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(
      "Olá! Meu nome é " + this.nome + " e tenho " + this.idade + " anos."
    );
  }
}

let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();

pessoa1.nome = "Alice";
pessoa1.idade = 19;

pessoa2.nome = "Hugo";
pessoa2.idade = 21;

pessoa1.apresentar();
pessoa2.apresentar();