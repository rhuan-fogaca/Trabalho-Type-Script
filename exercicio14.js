"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Solicita um número inteiro e exibe sua tabuada de 1 a 10.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio14 = executarExercicio14;
function executarExercicio14(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 14 — Tabuada ===\n");
        rl.question("Digite um número inteiro: ", (input) => {
            const num = parseInt(input, 10);
            if (isNaN(num)) {
                console.log("\n⚠️  Entrada inválida!");
            }
            else {
                console.log(`\n📋 Tabuada do ${num}:\n`);
                for (let i = 1; i <= 10; i++) {
                    const resultado = num * i;
                    console.log(`   ${num} × ${String(i).padStart(2)} = ${String(resultado).padStart(4)}`);
                }
            }
            rl.question("\nPressione Enter para voltar ao menu...", () => {
                resolve();
            });
        });
    });
}
