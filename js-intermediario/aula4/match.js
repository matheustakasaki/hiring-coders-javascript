const cpf = 'Meu cpf é 131.050.069-07';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}')

console.log(cpf.match(regex))