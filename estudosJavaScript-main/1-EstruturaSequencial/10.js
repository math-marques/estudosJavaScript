function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const celsius = parseFloat(prompt("Diz o valor em Celsius, boyzinho:"));
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C é equivalente a ${fahrenheit.toFixed(2)}°F`);

