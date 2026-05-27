"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que ordene um array de números em ordem crescente.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio10 = executarExercicio10;
function executarExercicio10(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 10 — Ordenação de Array (Crescente) ===\n");
        console.log("Dica: insira números separados por vírgula (ex: 42, 7, 19, 3, 88)");
        rl.question("\nDigite os números: ", (input) => {
            const partes = input
                .split(",")
                .map((s) => parseFloat(s.trim()))
                .filter((n) => !isNaN(n));
            if (partes.length === 0) {
                console.log("\n⚠️  Nenhum número válido encontrado.");
            }
            else {
                // Cria cópia para não alterar o array original
                const crescente = [...partes].sort((a, b) => a - b);
                const decrescente = [...partes].sort((a, b) => b - a);
                console.log(`\n📋 Array original:     [ ${partes.join(", ")} ]`);
                console.log(`✅ Ordem crescente:    [ ${crescente.join(", ")} ]`);
                console.log(`🔽 Ordem decrescente:  [ ${decrescente.join(", ")} ]`);
            }
            rl.question("\nPressione Enter para voltar ao menu...", () => {
                resolve();
            });
        });
    });
}
