function IMC(altura) {
    return (72.7 * altura) - 58;
}

const altura = parseFloat(prompt("sua altura em metros:"));

const pesoIdeal = IMC(altura);
console.log(`Com base na altura de ${altura}m, o peso ideal é ${pesoIdeal.toFixed(2)}kg.`);