/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  Rhuan Patryck Fogaça Meurer
  Cristofer dos Anjos dos Santos
  Victor Ceolin de Oliveira
  Triziano Garcia Pereira Bravo
  Otávio Augusto Martins de Sá
Data: 24 de Maio de 2026
Descritivo: Programa com classe Pessoa com atributos nome e idade e métodos de exibição.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  Define a classe Pessoa com atributos tipados (nome: string, idade: number)
  e um construtor para inicializá-los.
  O método exibir() imprime os dados formatados.
  O método apresentar() retorna uma string de apresentação.
  O programa instancia um objeto Pessoa com os dados do usuário e chama os métodos.
*/

import * as readline from "readline";

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  exibir(): void {
    console.log("\n👤 Dados da Pessoa:");
    console.log(`   Nome:  ${this.nome}`);
    console.log(`   Idade: ${this.idade} anos`);
  }

  apresentar(): string {
    return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

export function executarExercicio11(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 11 — Classe Pessoa ===\n");

    rl.question("Digite o nome: ", (nome) => {
      rl.question("Digite a idade: ", (idadeStr) => {
        const idade = parseInt(idadeStr, 10);
        if (!nome.trim() || isNaN(idade) || idade < 0) {
          console.log("\n⚠️  Dados inválidos!");
        } else {
          const pessoa = new Pessoa(nome.trim(), idade);
          pessoa.exibir();
          console.log(`\n💬 ${pessoa.apresentar()}`);
        }

        rl.question("\nPressione Enter para voltar ao menu...", () => {
          resolve();
        });
      });
    });
  });
}
