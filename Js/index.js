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

//sequencial

// const a = 2 + 7
// const b = 5
// const c = a + b
// console.log(c)

//não sequencial

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9
// setTimeout(function(){  //define tempo de espera para executar, ou seja, foi "agendada" para ocorer 0.5s depois
//     const d = demorada()
//     console.log(d)
// }, 500)
// const e = a + b
// console.log(e)

// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()
// console.log(d)
// const e = a + b + 2
// console.log(e)

//ordenando com setTimeout

// setTimeout(function(){
//     console.log('Dentro da timeout 1')
// }, 500)
// setTimeout(function(){
//     console.log('Dentro da timeout 2')
// }, 0)

//com o setTimeout agendamos a execução, neste caso, esta será exeutada depois da umSegundoNoFuturo

// setTimeout(function(){
//     console.log('Dentro da timeout')
// }, 0)

// const umSegundoNoFuturo = new Date().getTime() + 5000
// while (new Date().getTime() <= umSegundoNoFuturo);
// console.log('Fora da timeout')

//funções callback

//codigo horrivel - inferno de callback`s
// const fs = require ('fs')
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if(erro)
//             console.log(`Deu erro: ${erro}`)
//         else{
//             console.log(`Conteúdo: ${conteudo.toString()}`)
//             const triplo = conteudo.toString() * 3
//             const finalizar = (erro) => {
//                 if(erro)
//                     console.log('Erro ao salvar o triplo')
//                 else   
//                     console.log('Salvou com sucesso')
//             }
//             fs.writeFile('triplo.txt', triplo.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')

//promises

function calculoDemorado(numero){
    const p = new Promise (function (resolve, reject){
        let res = 0
        for (let i = 1; i <= numero; i++)
            res += i
        resolve(res)
    })
    return p

}
const res = calculoDemorado (100)
res
.then((resultado) => console.log(resultado))
.catch((erro) => console.log ('Falhou: ' + erro))

const res2 = calculoDemorado(-1)
.then((resultado) => console.log(resultado))
.catch((erro) => console.log ('Falhou: ' + erro))

function calculoRapidinho (numero){
    return Promise.resolve((numero * (numero + 1))/ 2)
}

calculoRapidinho (2).then(res => console.log(res))

