"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que calcule a média de três notas fornecidas pelo usuário.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio03 = executarExercicio03;
function executarExercicio03(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 03 — Média de Três Notas ===\n");
        rl.question("Digite a nota 1: ", (n1) => {
            rl.question("Digite a nota 2: ", (n2) => {
                rl.question("Digite a nota 3: ", (n3) => {
                    const nota1 = parseFloat(n1);
                    const nota2 = parseFloat(n2);
                    const nota3 = parseFloat(n3);
                    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
                        console.log("\n⚠️  Entrada inválida! Insira números válidos.");
                    }
                    else {
                        const media = (nota1 + nota2 + nota3) / 3;
                        const situacao = media >= 6 ? "✅ APROVADO" : "❌ REPROVADO";
                        console.log(`\n📊 Média: ${media.toFixed(2)}`);
                        console.log(`📋 Situação: ${situacao}`);
                    }
                    rl.question("\nPressione Enter para voltar ao menu...", () => {
                        resolve();
                    });
                });
            });
        });
    });
}
