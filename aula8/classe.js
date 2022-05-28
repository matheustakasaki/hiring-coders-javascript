class Matematica {
    soma(valor1, valor2) {
        return valor1 + valor2
    }
    subtracao(valor1, valor2) {
        return valor1 - valor2
    }
}

var instancia = new Matematica();

var resultado = instancia.soma(1,3);
console.log(resultado)