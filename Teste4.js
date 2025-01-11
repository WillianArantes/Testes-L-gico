/*4) Dado o valor de faturamento mensal de uma distribuidora,
 detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o 
percentual de representação que cada 
estado teve dentro do valor total mensal da distribuidora*/

/*calcular valor total*/

const valoresEstado = [
  {
    estado: "SP",
    valor: 67836.43,
  },
  {
    estado: "RJ",
    valor: 36678.66,
  },
  {
    estado: "MG",
    valor: 29229.88,
  },
  {
    estado: "ES",
    valor: 27165.48,
  },
];

let total = 0;
for (const valor of valoresEstado) {
  total += valor.valor;
}

//calcular percentual de cada estado
const percentual = (valoresEstado) => {
  for (const valor of valoresEstado) {
    let percentual = (valor.valor / total) * 100;
    console.log(valor.estado, "%" + percentual.toFixed(2));
  }
};
//exibir
percentual(valoresEstado);
