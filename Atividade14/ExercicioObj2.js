function Retangulo(x, y){
    
        this.x = x;
        this.y = y;
        this.Area = function(){
            return  this.x * this.y;
        }
        this.MostraDados = function(){
            return "Base: " + this.x + " Altura: " + this.y + " Área: " + this.Area();
        }
}

var retangulo = new Retangulo();
retangulo.x = parseInt(prompt("Digite o valor da base:"));
retangulo.y = parseInt(prompt("Digite o valor da altura:"));

alert(retangulo.MostraDados());