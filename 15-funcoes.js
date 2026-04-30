/*29/04/26*/

/*
FUnções

Utilização: Em praticamente todos os codigos e projetos

Vantagens:
-abstração 
-Organização
-Reproveitamento de código
-testes
-Documentação

Uma Função deve(baseada em minha opinião e no Código limpo):
-ter um nome totalmente auto-descritivo
-ter de zero a 2 parâmetros (no máximo)
-ser o mais simples possivel

palavras novas:
-function
-return
-underfined

Sintaxe:

function_nomedafunção(){
   bloco de função
}
*/

//hoisting
primeiraFuncao()


//declaração
function primeiraFuncao(){
    console.log('Minha primeira função!')
}

//function call
primeiraFuncao()

console.log(primeiraFuncao)

//Funções com parâmetro
function comprimentarAluno(nome){
    console.log(`Boa noite, ${nome}`)
}

comprimentarAluno('João')
comprimentarAluno('Ana')
comprimentarAluno('Maria')

function soma(a , b){
    console.log(a + b)
}

soma(7, 3)
soma(5, 9)
soma(1, 1)

function medianotas(a, b){
    const somanotas = soma(a, b)
    console.log(somanotas / 2)
}

medianotas(10, 10)
medianotas(9, 8)
medianotas(5, 6)


//efeito x retorno

function soma(a , b){
    return  (a + b)
}

console.log(soma(7, 3))
console.log(soma(5, 9))
console.log(soma(1, 1))

function medianotas(a, b){
    const somanotas = soma(a, b)
    return somanotas / 2
}

console.log(medianotas(10, 10))
console.log(medianotas(9, 8))
console.log(medianotas(5, 6))

function gerarEmailSenai(nome, sobrenome){
    nome = nome.toLowerCase()
    sobrenome = sobrenome.toLowerCase()
    const email = `${nome}. ${sobrenome}@email.com`
    return email 
}

console.log(gerarEmailSenai('Thiago', 'Lima'))
console.log(gerarEmailSenai('Guilherme', 'Rodrigues'))
console.log(gerarEmailSenai('Ryan', 'Silva'))

const emailMaria = gerarEmailSenai('MAria', 'Sousa')
console.log(emailMaria)

function enviarEmailMaria(){
    /*Maria é a diretora */
    console.log('E-mail enviado para', emailMaria)
}
enviarEmailMaria()


//exemplo de mais funções utilizada em conjunto

const ALIQUOTA_ICMS = 0.1;
const ALIQUOTA_IPI_ = 0.05;

function calcularIcms(valorbase){
    return valorbase * ALIQUOTA_ICMS;
}

function calcularIpi(valorbase){
    return valorbase * ALIQUOTA_IPI_;
}

function calcularValorProduto(valorbase){
    const ICMS = calcularIcms(valorbase)
    return valorbase + ICMS;
}

function calcularValorImportado(valorbase){
    const ICMS = calcularIcms(valorbase)
    const IPI = calcularIpi(valorbase)
    return valorbase + ICMS + IPI
}

console.log(calcularIcms(5));
console.log(calcularIpi(5));
console.log(calcularValorProduto(5));
console.log(calcularValorImportado(5));