var Produto = new Object();
Produto.nome = 'Mesa';
Produto.preco = 89,99;
Produto.dimensoes = {largura: "1m", comprimento: "1,5", altura: "90cm"};
Produto["nome no formato string valido"] = "deu certo";
var nomeProp = "novoNome";
Produto[nomeProp] = "deu certo o novo nome";
Produto[""] = "vazio";
Produto["123"] = 123;

// acessar usando operador membro

console.log("nome: ", Produto["nome"]);
console.log("altura: ", Produto.dimensoes.altura);
console.log("cubo: ", Produto.dimensoes.cubo);