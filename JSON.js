//JSON JavaScript Object Notation
// let pessoa = {
//     nome: 'José',
//     idade: 17
// }
// console.log(pessoa.nome)

// let p = {
//     nome: 'Maria',
//     idade: 19,
//     endereco:{
//         logradouro: 'Rua B',
//         numero: 122
//     }
// }
// console.log(p.endereco.numero)

// let c = {
//     cnpj: 22112211000145,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 122,
//         bairro: 'Vila A'
//     },
//     veiculos: [
//         {
//             marca: 'Ford',
//             modelo: 'Ka',
//             ano: 1995,
//             revisoes: [
//                 {
//                     data: '14/02/1996',
//                     consultor: 'Fábio'
//                 },
//                 {
//                     data: '15/03/1997',
//                     consultor: 'João'
//                 }
//             ]
//         },
//         {
//             marca: 'Volks',
//             modelo: 'Nivus',
//             ano: 2020
//         },
//         {
//             marca: 'Chevrolet',
//             modelo: 'Onix',
//             ano: 2022
//         },
//     ]
// }

// console.log(c.veiculos[0].revisoes[1].consultor)

const calc = {
    soma: (a, b) => a+b,
    subtracao: function (a, b) {return a - b},
    multiplicacao: (a,b) => a*b
}
console.log(calc.soma(2,3))
console.log(calc.subtracao(2,3))
console.log(calc.multiplicacao(2,3))
