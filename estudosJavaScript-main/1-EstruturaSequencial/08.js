let valorPorHora = parseFloat(prompt("Digite o quanto você ganha por hora, boyzinho:"));
let horasAoMes = parseFloat(prompt("Quantas horas tu trabalha por mês?"));
//Esse PARSEFLOAT ajuda numa situação = toda vez que invoco o prompt, ele me retorna string. parsefloat apenas ajusta pra numero c decimais
let salario = valorPorHora * horasAoMes;
alert("que cara rico, ganha: " + salario)
// dependendo da situação, eu posso usar um 'toFixed' só para LIMITAR quantidade de casas decimais que quero.