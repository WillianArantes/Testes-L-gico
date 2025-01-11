/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/
const nome = "Willian";

const stringInvertida = (nome) => {
  let arrayNome = nome.split("");
  let nomeInvertido = [];
  for (let i = arrayNome.length - 1; i >= 0; i--) {
    nomeInvertido.push(arrayNome[i]);
  }
  return nomeInvertido.join("");
};

//exibir
console.log(stringInvertida(nome));
