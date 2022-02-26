// JS não preve algns erros no compilador, além da redeclaração, 
//podemos chamar uma váriavel não declarada antes, como no ex abaixo (com var)
var idade = 18
console.log('Oi, ' + nome)
if (idade >= 18){
 var nome = 'Cria'
 console.log('Parabéms, ' + nome)
 console.log('Você é o klica')
}
console.log('Até mais ' + nome)

// // possível redeclarar variáveis, mas não é o ideal (com var)
// var linguagem = 'JavaScript'
// console.log ('Aprendendo ' + linguagem)
// //variável ´pde ser redeclarada
// var linguagem = 'Java'
// console.log('Aprendendo ' + linguagem)

// //const - constante - não muda o tipo
// const nome = 'GominDaZs'
// const endereco = `Rua X, 27`
// const sexo = 'M'
// const idade = 21

// //let - tipo variável
// let a = 2
// let nomeCompleto = 'Joao Silva'
// a = "abc"

// //var - basicamente igual ao let - escopos diferentes - var pouco intuitivo
// var c = 2+3
// var d = 'abcd'

// ==  comparação com coerção implícita, ou seja, leva em conta somente os valores e não os tipos (1 == '1' /true)
// === comparação sem coerção implícita, ou seja, leva em consideração os valores e os tipos (1 === '1' /false)






