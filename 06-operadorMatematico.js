/*22/04/26 */
/*
Atividade de operador Matematico
*/

//Calculo de raios
const raio = 3

const Pi = 3.14

const diametro = 2 * raio
const perímetro = (2 * Pi) * raio
const área = Pi * (raio * 2)

console.log(`Diâmetro: ${diametro}`)
console.log(`Perímetro: ${perímetro}`)
console.log(`Área: ${área}`)
console.log()

//calculo de física
const Celcius = 30

Fahrenheit = (Celcius * 1.8) + 32
Kelvin = Celcius + 273.15

console.log(`Valor de Fahrenheit: ${Fahrenheit}`)
console.log(`Valor de Kelvin: ${Kelvin}`)
console.log()

//valor de Média
//1 bimestre
const mat1 = 9
const port1 = 7
const Ed_Física1 = 6
const artes1 = 10

//2 bimestre
const mat2 = 5
const port2 = 4
const Ed_Física2 = 8
const artes2 = 7

//3 bimestre
const mat3 = 4
const port3 = 8
const Ed_Física3 = 2
const artes3 = 4

//4 bimestre
const mat4 = 10
const port4 = 8
const Ed_Física4 = 9
const artes4 = 7

//soma das Médias do bimestres
const X1b = mat1 + port1 + Ed_Física1 + artes1
const X2b = mat2 + port2 + Ed_Física2 + artes2
const X3b = mat3 + port3 + Ed_Física3 + artes3
const X4b = mat4 + port4 + Ed_Física4 + artes4

const bim_total = X1b + X2b + X3b + X4b

//media de cada bimestre 
const Média_01 = X1b / 4
const Média_02 = X2b / 4
const Média_03 = X3b / 4
const Média_04 = X4b / 4

//soma da Mediá dos 4 bimestres
const MédiaTotal = (X1b + X2b + X3b + X4b) / 4

console.log(`1 Bimestre: ${Média_01}`)
console.log(`2 Bimestre: ${Média_02}`)
console.log(`3 Bimestre: ${Média_03}`)
console.log(`4 Bimestre: ${Média_04}`)
console.log(`Média Final: ${MédiaTotal}`)
console.log()
