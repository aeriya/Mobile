// EXERCÍCIO 1

for (let i = 1; i <= 10; i++) { 
    console.log("Número:", i); 
}

// EXERCÍCIO 2

let numero = 1;
let soma = 0;

while(numero <= 5) {
    soma = soma + numero;
    numero++;
}

console.log(soma);

// EXERCÍCIO 3

let senha;

do {
  senha = "0000"; 

  console.log("Senha digitada:", senha);

} while (senha !== "1234");

console.log("Acesso permitido!");