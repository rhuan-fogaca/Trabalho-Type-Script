"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Programa com classe Pessoa com atributos nome e idade e métodos de exibição.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio11 = executarExercicio11;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    exibir() {
        console.log("\n👤 Dados da Pessoa:");
        console.log(`   Nome:  ${this.nome}`);
        console.log(`   Idade: ${this.idade} anos`);
    }
    apresentar() {
        return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
function executarExercicio11(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 11 — Classe Pessoa ===\n");
        rl.question("Digite o nome: ", (nome) => {
            rl.question("Digite a idade: ", (idadeStr) => {
                const idade = parseInt(idadeStr, 10);
                if (!nome.trim() || isNaN(idade) || idade < 0) {
                    console.log("\n⚠️  Dados inválidos!");
                }
                else {
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
