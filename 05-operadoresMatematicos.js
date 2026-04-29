/*22/04/26*/

/* 
Operadores Matemáticos 🧮
Utilização; Sempre que precisamos criar uma fórmula,
representar uma regra de negócio, etc.

são elas 
+ ➡️soma 
- ➡️subtração
* ➡️Multiplicação
/ ➡️Divisão 
% ➡️Módulo(resto da divisão)
**➡️Exponenciação

💡Regra de sinais:
+ com +➡️ +
+ com -➡️ -
- com +➡️ -
- com -➡️ +

💡Prioridades:
1- (o que estiver aqui dentro)
2- Esponenciação
3- *, /, %
4- +, -

*/

//soma
console.log(10 + 10)
console.log(10 + -10)
console.log(-10 + 10)
console.log(10 + 10)
console.log(-10 + -10)
console.log()

//subtração
console.log(10 - 10)
console.log(10 - -10)
console.log(-10 - 10)
console.log(-10 - -10)
console.log()

//Multiplicação
console.log(10 * 10)
console.log(10 * -10)
console.log(-10 * 10)
console.log(-10 * -10)
console.log(10 * (2 + 5))
console.log(10 * (2 + 6))
console.log()

//Divisão
console.log(10 / 10)
console.log(10 / -10)
console.log(-10 / 10)
console.log(-10 / -10)
console.log(10 / 2 + 5)
console.log(10 / (2 + 5))
console.log()

//Exponenciação
console.log(2 ** 2)
console.log(2 ** 3)
console.log(2 ** 8)
console.log(10 ** 2 + 5)
console.log(10 ** (2 + 5))

//modulo
console.log(10 / 2)
console.log(10 % 2)
console.log(10 / 2)
console.log(10 % 2)

//Exemplo prático
const valorbase = 100
const porcentagemdesconto = .1

const valordesconto = valorbase * porcentagemdesconto
const valorfinal = valorbase - valordesconto

console.log("Resumo do valores")
console.log(`valor base: R$ ${valorbase.toFixed(2)}`)
console.log(`Porcentagem de desconto: R$ ${porcentagemdesconto}`)
console.log(`VAlor desconto: R ${valordesconto.toFixed(2)}`)
console.log(`Valor Final: R$ ${valorfinal.toFixed(2)}`)

//Exemplo cálculo da raizes de uma função quadratica
// ax² = bx + x
const a = 1
const b = 0
const c = -4

const delta = b ** 2 -4 + a + c

const x1 = (-b + Math.sqrt(delta)) / (2 * a)
const x2 = (-b - Math.sqrt(delta)) / (2 * a)

console.log(`O conjunto solução é { ${x1}, ${x2}}`)

