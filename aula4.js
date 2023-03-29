/*function sayMyName(name){
    console.log('Your name is:' + name);
}
sayMyName('Sheila');
sayMyName('Pinheiro');*/

/*function quadrado(valor){
    return valor*valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);*/


/*function quadrado(valor){
    return valor * valor;
}
console.log(quadrado(10)+ quadrado(10));*/

/*function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}
console.log(incrementarJuros ( 100 , 10)) ; //valor + a porcentagem */



function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsesidade Grave';
    }
}

// Main
function main () {
    const peso = 57;
    const altura =1.56;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
main();
    