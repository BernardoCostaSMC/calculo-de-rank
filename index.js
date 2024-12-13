const readline = require('readline');

// Cria uma interface para leitura de entrada no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário o número de vitórias
rl.question('Digite o número de vitórias: ', (vitorias) => {
  // Pergunta ao usuário o número de derrotas
  rl.question('Digite o número de derrotas: ', (derrotas) => {
    // Converte as entradas para números inteiros
    const numVictory = parseInt(vitorias);
    const numDefeat = parseInt(derrotas);

    // Verifica se os valores digitados são válidos
    if (isNaN(numVictory) || isNaN(numDefeat)) {
      console.log("Por favor, insira números válidos para vitórias e derrotas.");
    } else {
      // Calcula o saldo e o rank
      const resultBalance = balanceVictoryDefeat(numVictory, numDefeat);
      const rank = calculationRank(resultBalance);

      // Exibe o resultado ao usuário
      console.log(`O Herói tem de saldo de ${resultBalance} e está no nível de ${rank}`);
    }

    // Fecha a interface de leitura
    rl.close();
  });
});

// Função que calcula o saldo entre vitórias e derrotas
function balanceVictoryDefeat(numVictory, numDefeat) {
  return numVictory - numDefeat;
}

// Função que determina o rank com base no saldo
function calculationRank(resultBalance) {
  if (resultBalance <= 10) {
    return "ferro";
  } else if (resultBalance >= 11 && resultBalance <= 20) {
    return "bronze";
  } else if (resultBalance >= 21 && resultBalance <= 50) {
    return "prata";
  } else if (resultBalance >= 51 && resultBalance <= 80) {
    return "ouro";
  } else if (resultBalance >= 81 && resultBalance <= 90) {
    return "diamante";
  } else if (resultBalance >= 91 && resultBalance <= 100) {
    return "lendário";
  } else if (resultBalance >= 101) {
    return "imortal";
  }
}
