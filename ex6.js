let nota1 = parseFloat(prompt("Coloque sua nota aqui: "));
let nota2 = parseFloat(prompt("Coloque sua nota aqui: "));
let nota3 = parseFloat(prompt("Coloque sua nota aqui: "));
let nota4 = parseFloat(prompt("Coloque sua nota aqui: "));
let nota5 = parseFloat(prompt("Coloque sua nota aqui: "));
let nota6 = parseFloat(prompt("Coloque sua nota aqui: "));
let nota7 = parseFloat(prompt("Coloque sua nota aqui: "));
let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;


if (media >= 6) {
    console.log("Parabéns, você foi aprovado");
} else {
    console.log("Você foi reprovado.");
}
