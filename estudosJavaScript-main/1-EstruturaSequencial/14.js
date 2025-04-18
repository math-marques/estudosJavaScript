const limitePeso = 50;
const valorMultaPorQuilo = 4;

const peso = parseFloat(prompt("Informe o peso dos peixes em quilos:"));

// cálculo
const excesso = peso > limitePeso ? peso - limitePeso : 0;
const multa = excesso * valorMultaPorQuilo;

// Exibe os resultados
console.log(`Peso dos peixes: ${peso}kg`);
console.log(`Excedente: ${excesso}kg`);
console.log(`multinha: R$ ${multa.toFixed(2)}`);