let lista = [1, 2, 5];

let listaIncluir = [3, 4];

// Como incluir o segundo array no primeiro?

console.log(lista)
console.log(listaIncluir)
for (let i = 0; i < listaIncluir.length; i++) {
    for (j = 0; j < lista.length; j++) {
        if (lista[j] >= listaIncluir[i]) {
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }
}
console.log(lista)


// SPREAD OPERATOR

const listResult = [1, 2, ...listaIncluir, 5, 6]
console.log(listResult)

let arr = ['a', 'b', 'c'];
let arr2 = [...arr]

arr2.push('d')

console.log(arr);
console.log(arr2);

