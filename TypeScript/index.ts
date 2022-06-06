function soma(a: number, b: number) {
  return a + b;
}

soma(2, 5);
interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquatico" | "aereo";
  executarRugido(alturaEmDecibeis: number): void;
  domestico: boolean;
}

interface ICanino extends IAnimal {
  porte: "pequeno" | "medio" | "grande";
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

type IDomestico = IFelino | ICanino;

const animal: IAnimal = {
  nome: "Elefante",
  tipo: "terrestre",
  domestico: false,
  executarRugido: (alturaEmDecibeis) => `$(alturaEmDecibeis)dB`,
};

animal.executarRugido(23);

const felino: IFelino = {
  nome: "Leão",
  tipo: "terrestre",
  domestico: false,
  visaoNoturna: true,
  executarRugido: (alturaEmDecibeis) => `$(alturaEmDecibeis)dB`,
};

felino.executarRugido(32);

const animalDomestico: IDomestico = {
  nome: "Cachorro",
  domestico: true,
  executarRugido: (alturaEmDecibeis) => `$(alturaEmDecibeis)dB`,
  porte: "grande",
  tipo: "terrestre",
};

const input = document.querySelector("#input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});

//Generic Types

function preencheLista<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

// preencheLista([1, 2, 3], "d");

interface IUsuario {
  id: string;
  email: string;
  cargo?: "gerente" | "coordenador" | "supervisor" | "funcionario";
}

const usuario: IUsuario = {
  id: "1",
  email: "nh@nh",
  cargo: "gerente", //cargo é opcional por causa do ?
};

function redirecionar(usuario: IUsuario) {
  if (
    usuario.cargo === "gerente" ||
    usuario.cargo === "coordenador" ||
    usuario.cargo === "supervisor"
  ) {
    console.log("Acesso administrativo");
  } else {
    console.log("Área de funcionário");
  }
  console.log("Acessou");
}

console.log(redirecionar(usuario));

interface ICachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof ICachorro]-?: ICachorro[K];
};

class MeuCachorro implements CachorroSomenteLeitura {
  nome;
  idade;
  parqueFavorito;
  constructor(nome: string, idade: number, parqueFavorito: string) {
    this.nome = nome;
    this.idade = idade;
    this.parqueFavorito = parqueFavorito;
  }
}

const cao = new MeuCachorro("Apolo", 14, "Bosque");

console.log(cao.nome);
console.log(cao.parqueFavorito);
console.log(cao.idade);

//importar uma biblioteca

import $ from "jquery";

$.fn.extend({
  novaFuncao() {
    console.log("Chamou nova função");
  },
});

$("body").novaFuncao();
