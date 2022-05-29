
// Desestruct
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Antunes',
    profissao: 'Gamer'
}

console.log(pessoa);

let { nome, sobrenome, idade, profissao } = pessoa
// Para cada referencia de nome na variavel, o js vai buscar o mesmo nome dentro do objeto. Caso a propriedade não exista no objeto, o valor devolvido será undefined
console.log(nome, sobrenome, idade, profissao)

console.log(pessoa);