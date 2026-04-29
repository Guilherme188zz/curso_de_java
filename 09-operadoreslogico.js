/* 23/04/26 */

/*
Operadores lógicos

Utilização: Sempre que precisamos criar lógicas mais 
complexas e condicioinais mais redefinidas

São eles:
-&& (and -> É lógico)
-|| (or -> ou OU lógico)
-! (not -> inversora lógica)

*/

//tabela verdade de and
console.log(false && false)
console.log(false && true)
console.log(true && false)
console.log(true && true)

//Exemplo literal
console.log( 10 > 2 && 10 % 2 === 0)

//Exemplo prático
const user = 'adimn'
const passoword = '12345'

const auth = user === 'adimn' && passoword === '12345'
console.log(`O usuário foi autenticado: ${auth}`)
console.log()

//tabela verdade or 
console.log(false || false)
console.log(false || true)
console.log(true || false)
console.log(true || true)

//Exemplo literal
console.log(10 > 2 || 10 % 2 === 0)

//Exemplo prático
const mediaNotas = 6
const frequenciaAluno = .75

const reprovarAluno = mediaNotas < 5 || frequenciaAluno <.75
console.log(`O aluno está reprovado: ${reprovarAluno}`)
console.log()

// tabela verdade not
console.log(!false)
console.log(!true)

//Exemplo literal
console.log(!(10 > 2 || 10 % 2 === 0))
console.log(!10 > 2 || 10 % 2 === 0)
console.log()

const aprovarAluno = !reprovarAluno
console.log(`O aluno está reprovado: ${reprovarAluno}`)
console.log()

//exemplo bomba
const B = false
const A = false

const situação1 = !A && !B
const situação2 = A && !B
const ligarBomba = situação1 || situação2

console.log(`deve-se ligar a bomba: ${ligarBomba}`)