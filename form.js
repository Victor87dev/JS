//alert('olá mundo!')

/*varoáveis */
//const
//const n1 = 10
//const n2 = 25
//alert('n1 = ' + n1)
//alert(n1 + '+' + n2 + '='  + 'o resultado é ' + (n1+n2))
//alert(`n1 = ${n1} + ${n2} = ${n1+n2}`) //template string (n usa aspas e sim crase)

//var n1 = prompt('Digite seu nome')
//alert('Seu nome é ' + n1) (uma forma de aparecer o alerta com o resultado)
//document.write('Seu nome é ' + n1) //(imprime o nome na tela do site)
//console.log('Seu nome é ' + n1)  //(vai aparecer no console do site, apertando F12 no site)

//let diaHoje = prompt('Que dia é hoje?') //(prompt e a caixinha para escrever)
//document.write(`hoje é ${diaHoje} `)
//console.log(`Hoje é ${diaHoje} `)
//alert(`hoje é ${diaHoje}`)

//let n1 = prompt("Digite um número")
//n1 = parseFloat(n1)  //parseFloat para número decimal ou real
// n1= parseInt(n1)  // parseInt para número inteiro

//let n2 = prompt('Digite um número')
//n2 = parseFloat(n2)

//alert(`A soma de ${n1}+${n2} = ${n1+n2}`)

/*
(==) igualdade de valor
(===) igualdade de valor e tipo
(=) atribuição
*/


//let n1 = prompt('Digite um número')
//n1 = parseInt(n1)

//let n2 = parseInt(prompt('Digite outro número')) //(essa forma deixa o código mais limpo)

// 3 formas de mostrar o resultado, abaixo.

//alert(`${n1} + ${n2} = ${n1+n2}`)
//document.write(`${n1} + ${n2} = ${n1+n2}`)
//console.log(`${n1} + ${n2} = ${n1+n2}`)

/*IF e ELSE (se e senão) */

//let n1 = parseFloat(prompt('Digite um número'))
//let n2 = parseFloat(prompt('Digite outro número'))

//let media = (n1+n2)/2

//if (media>=7){
//document.write(`Parabéns você foi Aprovado com média: ${media}`)
//}else{
 //   document.write(`Você foi Repovado com média: ${media}`)
//}

//const nome1 = 'Juan'
//const nome2 = 'Juan'

//alert(nome1 !== nome2)

/*
(!=) diferente em valor
(!== diferente em valor e tipo)
*/


const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit',(e) =>{
    const nome = frm.inNome.value // obtém o nome digitado no form
    resp.innerText = `Seu nome é ${nome}` // exibe a resposta do programa
    e.preventDefault()  // evita envio do form
})



