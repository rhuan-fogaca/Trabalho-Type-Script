"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que encontre o maior número em um array de inteiros.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio07 = executarExercicio07;
function executarExercicio07(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 07 — Maior Número em Array ===\n");
        console.log("Dica: insira números separados por vírgula (ex: 5, 12, 3, 8)");
        rl.question("\nDigite os números: ", (input) => {
            const partes = input.split(",").map((s) => parseFloat(s.trim()));
            const validos = partes.filter((n) => !isNaN(n));
            if (validos.length === 0) {
                console.log("\n⚠️  Nenhum número válido encontrado.");
            }
            else {
                const maior = Math.max(...validos);
                const indice = validos.indexOf(maior);
                console.log(`\n✅ Array informado: [ ${validos.join(", ")} ]`);
                console.log(`🏆 Maior número: ${maior} (posição [${indice}])`);
            }
            rl.question("\nPressione Enter para voltar ao menu...", () => {
                resolve();
            });
        });
    });
}
