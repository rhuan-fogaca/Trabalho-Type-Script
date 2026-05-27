"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que exiba apenas os números pares de 1 a 20.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio05 = executarExercicio05;
function executarExercicio05(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 05 — Números Pares de 1 a 20 ===\n");
        const pares = [];
        for (let i = 1; i <= 20; i++) {
            if (i % 2 === 0) {
                pares.push(i);
            }
        }
        console.log("✅ Números pares de 1 a 20:");
        console.log(`   [ ${pares.join(", ")} ]`);
        rl.question("\nPressione Enter para voltar ao menu...", () => {
            resolve();
        });
    });
}
