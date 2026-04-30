/*30/04/26*/

/* 
Objetos JS {}

Utilização: Sempre que quisermos representar uma entidade de forma simples
em um objeto especifico, ou uma estrutura de dados organizados em
chave. 

Vantagens:
-Centralização de lógica
-Organização de dados
-Criação de metodos

Aplicaçôes:
- Json(significa extamente JavaScript object Notation)
-APIs

Caracteristicas:
-São interávies
-São editáveis
-Pertencem a classe Object
-❌ Não são indexadas em zero
*/

const usuario = {
    id: 1,
    name: 'João',
    email: 'João@senai.com',

    //metodos
    apresentar(){ 
        console.log('oi, meu nome é', this.name)
    }
}

// O poder dbs chaves

// Leitura dos dados
console.log(usuario.id)
console.log(usuario.name)
console.log(usuario.email)
usuario.apresentar()

//Criando um par chave:valor novo
usuario.curso = 'JAvaScript'
console.log(usuario)

//remover um par have:valor
delete usuario.curso
console.log(usuario)