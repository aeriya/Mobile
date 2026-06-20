const promessa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Mensagem!");
  }, 3000);
});

promessa.then(mensagem => {
  console.log(mensagem);
});