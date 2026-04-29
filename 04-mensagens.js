/*22_04_26
/*
Mensagem🪟
utili

2 Tennicas principais:
1- comcetenação de stings 
2- js literals ( Literais Javascript)
*/

//Exemplo 01
const nome = "Thiago";
const Sobrenome = 'Lima';
const NomeCompleto = nome + "" + Sobrenome;
console.log(NomeCompleto);

// Exemplo 01
// Código: LED#10, quantidade: 500 unidades, preço: R$3.50

const codigoProduto = "led#10";
const quantidadeProduto = 500;
const precoproduto = 3.5;

console.log("Código: " + codigoProduto + ", Quantidade: " +
    quantidadeProduto + " unidades, Preço: R$ " + precoproduto.toFixed(2)
)



// Exemplo 02
 nome2 = "Thiago";
 Sobrenome2 = 'Lima';
 NomeCompleto2 = `${nome} ${Sobrenome}`;
console.log(NomeCompleto2);

// Exemplo 02
// Código: LED#10, quantidade: 500 unidades, preço: R$3.50

 codigoProduto2 = "led#10";
 quantidadeProduto2 = 500;
 precoproduto2 = 3.5;

console.log(
 `código: ${codigoProduto2}, Quantidade: ${quantidadeProduto2} unidades, Preço: R$ ${precoproduto2.toFixed(2)}`
)


