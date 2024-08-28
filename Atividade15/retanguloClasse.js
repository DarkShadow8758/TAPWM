class Retangulo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Area() {
        return this.x * this.y;
    }
    MostraDados() {
        return "Base: " + this.x + " Altura: " + this.y + " Área: " + this.Area();
    }
}

// Criando uma instância da classe Retangulo
const retangulo = new Retangulo(
    parseInt(prompt("Digite o valor da base:")),
    parseInt(prompt("Digite o valor da altura:"))
);

// Exibindo os dados do retângulo em um alert
alert(retangulo.MostraDados());