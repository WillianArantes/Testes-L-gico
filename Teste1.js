/*utilizei uma arrow function passando valores por parametros 
para realizar a soma  co  laço while e retornar e atribuir o valor na constante*/
const soma = (k = 0, indice = 13, soma = 0) => {
  while (k < indice) {
    //contador
    k = k + 1;
    //soma
    soma = soma + k;
  }
  return soma;
};

console.log(soma());*/
