"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que receba dois números inteiros e exiba a soma deles.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio01 = executarExercicio01;
function executarExercicio01(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 01 — Soma de Dois Números ===\n");
        rl.question("Digite o primeiro número inteiro: ", (input1) => {
            const num1 = parseInt(input1, 10);
            rl.question("Digite o segundo número inteiro: ", (input2) => {
                const num2 = parseInt(input2, 10);
                if (isNaN(num1) || isNaN(num2)) {
                    console.log("\n⚠️  Entrada inválida! Por favor, insira números inteiros.");
                }
                else {
                    const soma = num1 + num2;
                    console.log(`\n✅ Resultado: ${num1} + ${num2} = ${soma}`);
                }
                rl.question("\nPressione Enter para voltar ao menu...", () => {
                    resolve();
                });
            });
        });
    });
}
