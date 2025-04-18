function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

const fahrenheit = parseFloat(prompt("Diz o valor em Fahrenheit, boyzinho:"));

const celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F é equivalente a ${celsius.toFixed(2)}°C`);