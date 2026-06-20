const precos = [10.5, 22.3, 18.4];

const total = precos.reduce(
  (acumulador, preco) => acumulador + preco,
  0
);

console.log(total);