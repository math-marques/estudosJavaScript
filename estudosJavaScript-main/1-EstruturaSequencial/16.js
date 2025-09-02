const coberturaPorLitro = 3; // 1 litro para cada 3 m²
const capacidadeLata = 18; // 18 litros por lata
const precoLata = 80.00; // R$ 80,00 por lata

const area = parseFloat(prompt
    ("Informe o tamanho da área a ser pintada em metros quadrados, por gentileza:"));

const litrosNecessarios = area / coberturaPorLitro;
const latasNecessarias = Math.ceil(litrosNecessarios / capacidadeLata); 
// Essa classe Math.ceil arredonda para cima
const precoTotal = latasNecessarias * precoLata;

// Relatório
console.log(`Área a ser pintada: ${area} m²`);
console.log(`Quantidade de latas necessárias: ${latasNecessarias}`);
console.log(`Preço total: R$ ${precoTotal.toFixed(2)}`);
