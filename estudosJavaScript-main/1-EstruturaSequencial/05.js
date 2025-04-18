/* bizu: Ki - Homem - Danado - Morreu - Deixando - Cinco - Mulheres
         Km - Hm - Dam - M - dm - cm - mm
         ------------------------------> dividido por 3,6
         <------------------------------ multiplico por 3,6
*/

let valorEmMetros = prompt("Digite a primeira medida, boyzinho:");

let converteParaDecimetro = Number(valorEmMetros) * 3.6 ;
let converteParaCentimetro = Number(converteParaDecimetro) *3.6;
alert("De metros, a medida em centímetros é: " + converteParaCentimetro)

