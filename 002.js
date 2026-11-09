// criando a função para calculo a média

function calculomc(peso, altura) {

    let imc = peso / (altura * altura);
    //return imc; sem fixar o tamanho do numero de casas decimais.
    return imc.toFixed(2); // retomar o imc com duas casas decimais
}

console.log("imc para 70kg e 1.75m: " + calculomc(70, 1.75));
