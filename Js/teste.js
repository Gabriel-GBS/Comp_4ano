//1
// const variavel = 1
// variavel ++
// console.log(variavel)
// erro na linha dois//

//2
// console.log(nome)
// const idade = 18
// if(idade >= 18){
//     var nome = 'João'
//     console.log(nome + ' é maior de iadade')
// }
// console.log(nome)
//exibe undefined João é maior de idade Joãp
//Se trocar por let na linha 4, o programa muda o comportamento//

//3
// const n1 = 5
// let n2 = '10'
// var n3 = n1 + n2
// var n4 = n1 + Number(2)
// console.log(n1 + n2 + n3 + n4)
//Todas as atribuições são válidas
//A linha 3 faz uso de coerção implicita(muda o tipo da variavel)//

//4
// const valores = [1, 2, 3, 4, 5]
// const res = valores.reduce((ac, v) => {
//     return v % 2 == 1 ? ac + v : ac
// })
// console.log(res)
//reduce - função de alta ordem
//O resultado depende da paridade dos valores para
//O resultado não é a soma de todos os valores//

// 5
// const soma = (a, b) => {return a + b}
// console.log(soma(2,3))
//exibe undefined//

//6
// function f1(){
//     console.log('f1');
// }
// function f2 (f){
//     console.log('f2');
//     f();
// }
// function f3 (f){
//     f()
//     console.log('f3');
//     return function (){
//         console.log('f4')
//     }
// }
// f2(f1)
// f3(f1)()
//exibe f2 f1 f1 f3 f4//

//7
// const fs = require('fs');
// const f1 = (nome) => {
//     const f2 = (erro, conteudo) => {
//         if(!erro)
//             console.log(conteudo.toString())
//         const f3 = (erro, conteudo) => {
//             if(!erro)
//                 console.log(conteudo.toString())
//             fs.readFile(nome, f3)
//         }
//         fs.readFile(nome, f2)
//     }
// }
// f1('2')
//exibe 2 2//

//8
// function minhaPromise (){
//     return Promise.resolve("Tudo OK!")
// }
// minhaPromise().then(res => console.log(res))
//Sempre devolve uma promise no estado de Fullfilled
//Cliente obtem 'Tudo OK!' usando a construção then
//A função const f = () => Promise.resolve('Tudo OK!') é equivalente//

// 9
// const f = async () => {
//     return 1
// }
// f()
// .then(res =>(res))
// .then (res => (res + 2))
// .then (res => (res % 2 == 1))
// .then (res => console.log(res))
//Quatro chamadas res, mesmo nome mas com escopos diferentes
//Exibe true

//ANULADA
// async function f() {
//     return 1
// }

// async function teste (){
//     const r = await f()
//     console.log(r)
//     f().then(res => console.log(res))
//     r.then(res => console.log(res))
// }
// teste().then(res => console.log(res))

// console.log(5 % 2)