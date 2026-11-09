// costruindo uma lista de compras
let listadecompras = ["arroz","feijão","macarrão","leite","ovos"];

//adicionando itens a lista
listadecompras.push("pao", "manteiga")

//console.log("lista de compras>:", listadecompras);

console.log('total de itens na lista:' + listadecompras.length);

// listando todos os intens da lista
listadecompras.forEach(function(item)
{
    console.log("_" + item);
});
