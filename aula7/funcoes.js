function soma(valor, valor2) {
    let soma = valor + valor2
    return soma
}


function hello(nome) {
    console.log('Olá Gama! Você é o ' + nome)
}
var tres = soma(1, 2);

var resultadoDaSoma = soma(10, 26)
console.log(tres, typeof tres);
console.log(resultadoDaSoma, typeof resultadoDaSoma);


// Arrow Function
const arrowSoma = (x, y) => console.log(x + y);
hello('matheus')


