let idade = parseInt(prompt("Qual a sua idade? "));


if (idade <= 12) {
    console.log("Você é uma criança ");
} else if (idade >= 13 && idade <= 18) {
    console.log("Você é um adolescente ");
} else if (idade >= 19 && idade <= 60) {
    console.log("Você é um adulto ");
} else {
    console.log("Você é idoso ");
}


