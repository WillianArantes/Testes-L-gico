/*calcule o retorno

• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento
 diário foi superior à média mensal. 
 IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média;*/

const fs = require("fs");

// Lendo o arquivo JSON de forma assíncrona
fs.readFile("dados.json", "utf8", (erro, dados) => {
  if (erro) {
    console.error("Erro ao carregar o arquivo JSON:", erro);
    return;
  }

  // Convertendo os dados lidos em um objeto JavaScript
  const jsonData = JSON.parse(dados);

  //novo array sem os valores 0
  const faturamento = jsonData.filter((faturamento) => faturamento.valor > 0);
  //menor valor de faturamento
  const faturamentoMenor = faturamento.reduce(
    (min, item) => (item.valor > 0 && item.valor < min ? item.valor : min),
    Infinity
  );
  //exibir menor faturamento diario
  console.log(`${faturamentoMenor.toFixed(4)}`);

  //maior valor de faturamento
  const faturamentoMaior = (faturamento) => {
    maiorValor = jsonData[0]["valor"];
    for (const valor of faturamento) {
      if (valor.valor > maiorValor) {
        maiorValor = valor.valor;
      }
    }
    return maiorValor;
  };

  //exibir maior faturamento diario
  console.log(`${faturamentoMaior(faturamento).toFixed(4)}`);

  // media mensal
  const mediaMensal = (faturamento) => {
    let media = 0;
    let soma = 0;
    let cont = 0;
    for (let valor of faturamento) {
      soma += valor.valor;
      cont++;
    }
    media = soma / cont;
    return media;
  };

  //exibir média mensal
  console.log(`${mediaMensal(faturamento).toFixed(4)}`);

  //Numero de dias acima da média mensal.
  const fatuMaiorMedia = (faturamento) => {
    //numero de dias em que o faturamento diario foir maior que a media mensal
    let numDiasAcima = 0;
    for (const valor of faturamento) {
      if (valor.valor > mediaMensal(faturamento)) {
        numDiasAcima++;
      }
    }
    return numDiasAcima;
  };
  //exibir faturamento diario maior que a média mensal
  console.log(`${fatuMaiorMedia(faturamento)}`);
});
