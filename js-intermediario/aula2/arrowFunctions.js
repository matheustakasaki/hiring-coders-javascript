// Sem arrow function
function soma(x, y) {
    return x + y;
}

console.log(soma(5, 5));

// com arrow function
const dividir = (x, y) => {
    return x / y
}

console.log(dividir(5, 5))
// É importante funções estarem dentro de constantes!!

const obj = () => { return { nome: 'Matheus', sobrenome: 'Antunes' } };

console.log(obj())
