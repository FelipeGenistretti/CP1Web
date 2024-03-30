let peso = parseFloat(prompt('Qual o seu peso? '));
let altura = parseFloat(prompt('Qual a sua altura? '));
let IMC = peso / (altura * altura);
   
if (IMC < 18.5) {
    console.log('Você está abaixo do peso!');
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log('Você está no peso ideal');
} else {
    console.log('Você está acima do peso');
}
