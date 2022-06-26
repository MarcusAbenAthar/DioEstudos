//desafio 1

let employee: { code: number; name: string };

employee: {
  code: 10;
  name: "John";
}

//desafio 2

let pessoas: {
  nome: string;
  idade: number;
  profissao: string;
};

pessoas: {
  pessoa1: {
    nome: "maria";
    idade: 29;
    profissao: "atriz";
  }
  pessoa2: {
    nome: "roberto";
    idade: 19;
    profissao: "Padeiro";
  }
  pessoa3: {
    nome: "laura";
    idade: 32;
    profissao: "Atriz";
  }
  pessoa4: {
    nome: "carlos";
    idade: 19;
    profissao: "padeiro";
  }
}

//desafio3

let btnAtualizar = document.querySelector("#atualizar-saldo");
let soma = document.querySelector("#soma") as HTMLInputElement;
let btnLimpar = document.querySelector("#limpar");
let campoSaldo = document.querySelector("#saldo") as HTMLSpanElement;

campoSaldo.innerHTML = "0";

function somarAoSaldo(n: number) {
  let res = parseInt(campoSaldo.innerHTML) + n;
  campoSaldo.innerHTML = res.toString();
}

btnAtualizar?.addEventListener("click", () => {
  return somarAoSaldo(parseInt(soma.value));
});
btnLimpar?.addEventListener("click", () => {
  campoSaldo.innerHTML = "0";
  soma.value = "";
});
