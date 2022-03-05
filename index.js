// JS não preve algns erros no compilador, além da redeclaração, 
//podemos chamar uma váriavel não declarada antes, como no ex abaixo (com var)

// var idade = 18
// console.log('Oi, ' + nome)
// if (idade >= 18){
//  var nome = 'Cria'
//  console.log('Parabéms, ' + nome)
//  console.log('Você é o klica')
// }
// console.log('Até mais ' + nome)

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

// const nomes = [
//     "Ana Maria",
//     "Antonio",
//     "Rodrigo",
//     "Alex",
//     "Cristina"
// ]

// //encontrar nomes que começam com A

// console.log("Apenas nomes com A:")
// const apenasA = nomes.filter((n) => {
//     return n.startsWith("A")
// })
// console.log(apenasA + "\n")

// //mapear palavras
// //[A, A, R, A, C]

// console.log("Iniciais dos nomes:")
// const mapeamento = nomes.map((nome) =>{
//     return nome.charAt(0)
// })
// console.log(mapeamento + "\n")

// //verificar se todos os valores cumprem a condição

// const resultado = nomes.every((n) => {
//     return n.startsWith("A")
// })
// console.log(resultado)

// //soma de valores
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, atual) => {
//     return ac+atual
// })
// console.log(soma)


// //definição de função
// function hello(){
//     console.log("oi")
// }

// //chamada da função, ou seja, ponto em que ela é colocada em execução
// hello()

// function hello(nome){
//     console.log("Oi, " + nome)
// }

// hello("José")

//closure

// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

// //devolver uma nova coleção que possui todos os elementos de v 
// //que fazem com que f produza true

// function filter (v, f){
//     const g = []
//     for(n = 0; n < v.length; n++){
//         if(f(v[n])){
//         g.push(v[n])   
//        }
//    }console.log('os valores que cumprem a função são:') 
//    return g
// }
// console.log(filter ([1, 2, 3], e => e % 2 === 0) + '\n')

// //produzir uma coleção nova que,
// //para cada elemento v[i] possui o valor resultante f(v[i])

// function map (v, f){
//     const g = []
//     for(n = 0; n < v.length; n++){
//         g.push(f(v[n]))
//     }console.log('os tamanho das palavras são respectivamente:')
//     return g
// }
// console.log(map (['abcd', 'abc'], e => e.length) + '\n')

// function eAgora (){
//     let cont = 1
//     function f1 (){
//         console.log(cont)
//     }
//     cont ++
//     function f2(){
//         console.log(cont)
//     }
//     //isso é um objeto JSON
// return{f1, f2}
// }

// let res = eAgora()
// res.f1()
// res.f2()
