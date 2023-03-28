const precoCombustivel = 4.99;
const KmPorLitro= 12;
const distanciaEmKm =100;

const litrosConsumidos = distanciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(valorGasto.toFixed(2)); //casas decimais