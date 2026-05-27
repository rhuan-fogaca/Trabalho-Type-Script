"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Programa com herança — classe Aluno herda de Pessoa e adiciona matrícula.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio12 = executarExercicio12;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    exibir() {
        console.log(`   Nome:  ${this.nome}`);
        console.log(`   Idade: ${this.idade} anos`);
    }
}
class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade); // chama o construtor da classe pai
        this.matricula = matricula;
    }
    // Sobrescreve o método da classe pai
    exibir() {
        super.exibir(); // aproveita o método pai
        console.log(`   Matrícula: ${this.matricula}`);
    }
}
function executarExercicio12(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 12 — Herança: Aluno extends Pessoa ===\n");
        rl.question("Nome do aluno: ", (nome) => {
            rl.question("Idade: ", (idadeStr) => {
                rl.question("Matrícula: ", (matricula) => {
                    const idade = parseInt(idadeStr, 10);
                    if (!nome.trim() || isNaN(idade) || !matricula.trim()) {
                        console.log("\n⚠️  Dados inválidos!");
                    }
                    else {
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
