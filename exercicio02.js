"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio02 = executarExercicio02;
function executarExercicio02(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 02 — Par ou Ímpar ===\n");
        rl.question("Digite um número inteiro: ", (input) => {
            const num = parseInt(input, 10);
            if (isNaN(num)) {
                console.log("\n⚠️  Entrada inválida! Por favor, insira um número inteiro.");
            }
            else {
                const resultado = num % 2 === 0 ? "PAR" : "ÍMPAR";
                console.log(`\n✅ O número ${num} é ${resultado}.`);
            }
            rl.question("\nPressione Enter para voltar ao menu...", () => {
                resolve();
            });
        });
    });
}
