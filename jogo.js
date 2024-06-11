var aleatorio = Math.floor(Math.random() * 100 + 101);
let nome = "";
let numero = "";
let tentativas = 4;
console.log("Digite seu nome!\n");

process.stdin.on("data", function (data) {
  if (!nome) {
    nome = data.toString().trim();
    process.stdout.write(
      "Bem vindo. " +
        nome +
        " ao jogo de advinhação, digite um número de 100 a 200!\n"
    );
  } else {
    numero = data.toString().trim();
    if (numero == aleatorio) {
      console.log(nome + " Você acertou!\n");
      process.exit();
    } else {
      tentativas--;
      console.log(
        nome +
          " Você errou tem mais " +
          tentativas +
          " tentativas para acertar!\n"
      );
      if (Math.abs(numero - aleatorio) < 10) {
        console.log("Você está perto!");
      } else {
        console.log("Você não está tão perto de advinhar!");
      }

      numero = "";
    }
    if (tentativas <= 0) {
      console.log("Seu número era " + aleatorio);
      console.log("O jogo foi reiniciado com um número novo\n");
      aleatorio = Math.floor(Math.random() * 100 + 101);
      tentativas = 4;
      console.log("Caso queira encerrar o processo digite ' sair ' ");
    }
  }
  if (data.toString().trim() === "sair") {
    console.log("Processo encerrado com sucesso!");
    process.exit();
  }
});