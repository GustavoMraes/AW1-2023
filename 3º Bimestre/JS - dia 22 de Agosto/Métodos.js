let p1 = {
    nome: "Gustavo :)",
    idade: 17,
    apresentar: function () {
        console.log(`Oi, meu nome é ${this.nome} e eu tenho ${this.idade}`)
    }
}
p1.apresentar();