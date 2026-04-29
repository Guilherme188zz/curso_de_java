/*23/04/26*/

/*  
strings

utilização: Em praticamente todos os programas

CAracteristicas:
-São iteráveis
-São indexedados
-Não são mutáveis
-Pertencem a classe strings, portanto tem atributos e métodos definidos
*/

const texto = 'Desenvolvimento em Javascript'
console.log(texto)
console.log(typeof(texto))

//Iteráveis
console.log(...texto)// spread operator

// Indexação em zero
console.log(texto[0])
console.log(texto[10])
console.log(texto[16])
console.log(texto[50])//undefined

//tamanho da string
console.log(texto.length)
console.log(texto[texto.length - 1])

//slicing
console.log(texto.slice(0, 15))
console.log(texto.slice(5, ))

const email = 'Joao@senai.com'
const atídex = email.indexOf('@')
console.log(email.slice(atídex, ))
console.log(email.slice( 0 , atídex ))

//Metodos de string
const myString = 'DeSeNvOlViMeNtO eM jAvAsCrIpT'
console.log(myString.toLocaleUpperCase())
console.log(myString.toLocaleLowerCase())
console.log(myString.trim())
console.log(myString.replace('eM , 1com'))
console.log(myString.toLowerCase() . trim())
console.log(myString.toLowerCase() . trim())

//Metodo de validação
//Email 
const myEmail = 'joao@senai.com'
const validarEmailSenai = myEmail.endsWith('senai.com')
console.log(`O email ${myEmail} é do senai: ${validarEmailSenai}`)

//Produto Eletronico
const codigoProduto = 'ELT'
const validarProdutoEletrica = codigoProduto.startsWith('ELT')
console.log(
    `O produto ${codigoProduto} é de elétrica: ${validarProdutoEletrica}`
)

//Matricula
const  codigoMatricula = 'TJS1-01'
const verificarCurso = codigoMatricula.includes('JS')
console.log(`A matricula ${codigoMatricula}
    é para JavaScript ${verificarCurso}`)

//senha
const passoword = '12345'
const validarSenha = passoword.localeCompare('12345')
console.log(validarSenha)

//Métodos utilitários
const palavra = 'Desenvolvimento em JavaScript'
console.log(palavra.indexOf('t'))
console.log(palavra.lastIndexOf('t'))
console.log(palavra.split(' '))
