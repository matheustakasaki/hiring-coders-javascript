
// No JS moderno, utilizamos let ao invés de var para declaração de variáveis
let nome = 'Taka'
let sobreNome = 'Saki'
let profissao = 'Front End Developer'

// E as deixamos usando o recurso template string - que é uma forma de escrever strings com capacidade de interpolação de valores
console.log(`Olá meu nome é ${nome} ${sobreNome} e eu sou ${profissao}`)


let obj = {
    chave: 'novo valor'
}

// Declarando um objeto diretamente na template string
console.log(`objecto ${{ chave: 'valor' }}`);
