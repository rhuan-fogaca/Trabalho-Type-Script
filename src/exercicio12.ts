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
Descritivo: Programa com herança — classe Aluno herda de Pessoa e adiciona matrícula.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  Define a classe base Pessoa com nome e idade.
  A classe Aluno estende Pessoa usando a palavra-chave 'extends'.
  O construtor de Aluno chama super() para inicializar os atributos herdados,
  e adiciona o atributo matricula exclusivo da subclasse.
  O método exibir() é sobrescrito (override) para incluir a matrícula na exibição.
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
    console.log(`   Nome:  ${this.nome}`);
    console.log(`   Idade: ${this.idade} anos`);
  }
}

class Aluno extends Pessoa {
  matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    super(nome, idade); // chama o construtor da classe pai
    this.matricula = matricula;
  }

  // Sobrescreve o método da classe pai
  exibir(): void {
    super.exibir(); // aproveita o método pai
    console.log(`   Matrícula: ${this.matricula}`);
  }
}

export function executarExercicio12(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 12 — Herança: Aluno extends Pessoa ===\n");

    rl.question("Nome do aluno: ", (nome) => {
      rl.question("Idade: ", (idadeStr) => {
        rl.question("Matrícula: ", (matricula) => {
          const idade = parseInt(idadeStr, 10);
          if (!nome.trim() || isNaN(idade) || !matricula.trim()) {
            console.log("\n⚠️  Dados inválidos!");
          } else {
            const aluno = new Aluno(nome.trim(), idade, matricula.trim());
            console.log("\n🎓 Dados do Aluno:");
            aluno.exibir();
            console.log(`\n✅ Aluno é instância de Pessoa? ${aluno instanceof Pessoa}`);
            console.log(`✅ Aluno é instância de Aluno?  ${aluno instanceof Aluno}`);
          }

          rl.question("\nPressione Enter para voltar ao menu...", () => {
            resolve();
          });
        });
      });
    });
  });
}
