const salarioPorHora = parseFloat(prompt("Quanto tu ganha por hora, boyzinho?"));
const horasTrabalhadas = parseFloat(prompt("uantas hras trabalhas no mes?"));

const salarioBruto = salarioPorHora * horasTrabalhadas;

const descontoIR = salarioBruto * 0.11; // 11% para o Imposto de Renda
const descontoINSS = salarioBruto * 0.08; // 8% para o INSS
const descontoSindicato = salarioBruto * 0.05; // 5% para o sindicato

// Calcula o salário líquido
const totalDescontos = descontoIR + descontoINSS + descontoSindicato;
const salarioLiquido = salarioBruto - totalDescontos;

//Relatório impresso
console.log(`+ Salário Bruto : R$ ${salarioBruto.toFixed(2)}`);
console.log(`- IR (11%) : R$ ${descontoIR.toFixed(2)}`);
console.log(`- INSS (8%) : R$ ${descontoINSS.toFixed(2)}`);
console.log(`- Sindicato (5%) : R$ ${descontoSindicato.toFixed(2)}`);
console.log(`= Salário Líquido : R$ ${salarioLiquido.toFixed(2)}`);