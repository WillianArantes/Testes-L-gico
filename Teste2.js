/*calcular sequencia de fibonacci e verificar 
se o numero passado contem na sequencia.

- inicia - se por 0 e 1 
- criar um array com valores 0 e 1
- realiza a soma dos 2 anteriores
- adiciona o valor somado na ultima posição do array,
- realiza a soma dos dois valores anteriores ao valor somado
- if valor somado for igual ao numero passado retorno uma msg 
- if valor somado for maior que ao numero passado retorno uma msg e
finalizo o algoritmo.
*/

const verificarSeqFibo = (num) => {
  let a = 0;
  let b = 1;
  let soma = 0;
  //laço para realizar o calculo
  do {
    soma = a + b;
    a = b;
    b = soma;
    //condição para verificar se numero contem na lista
    if (soma === num) {
      console.log("Este numero " + num + " pertence a sequência Fibonacci!");
      return;
    }
  } while (soma < num);
  console.log("Este numero " + num + " não pertence a sequência Fibonacci!");
};

verificarSeqFibo(13);
verificarSeqFibo(7);
