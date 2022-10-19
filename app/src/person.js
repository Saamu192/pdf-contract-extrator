const {} = require("./utils.js");
class Person {
  constructor([
    nome,
    nacionalidade,
    estadoCivil,
    documento,
    rua,
    numero,
    bairro,
    estado,
  ]) {
    this.nome = nome;
    this.nacionalidade = nacionalidade;
    this.estadoCivil = estadoCivil;
    this.documento = documento;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.estado = estado;
  }
}

module.exports = Person;
