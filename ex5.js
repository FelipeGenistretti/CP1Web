let numeDeUsuario = Admin;
let senha = 1234;


let insiraSenha = prompt('Qual a senha? ')
let insiraNome = prompt('Qual o seu nome de usuário? ')


if (senha == insiraSenha && numeDeUsuario == insiraNome) {
    console.log("Login realizado com sucesso")
} else {
    console.log("Falha de autentificação")
}
