function IMCH(alturaHomem) {
    return (72.7 * alturaHomem) - 58;
}

function IMCM(alturaMulher) {
    return (62.1 * alturaMulher) - 44.7;
}

const altura = parseFloat(prompt("sua altura em metros:"));

const pesoIdealHomen = IMCH(alturaHomem);
const pesoIdealMulher = IMCM(alturaMulher);

console.log(`Primeiro caso (Homens) = Com base na altura de ${alturaHomem}m, o peso ideal é ${pesoIdealHomen.toFixed(2)}kg.`);
console.log(`Segundo caso (Mulheres) = Com base na altura de ${alturaMulher}m, o peso ideal é ${pesoIdealMulher.toFixed(2)}kg.`);
