function mensagem() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mensagem!");
    }, 3000);
  });
}

async function executar() {
  const mensagem = await mensagem();
  console.log(mensagem);
}

executar();