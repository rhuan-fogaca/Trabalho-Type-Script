"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Programa que converte temperatura de Celsius para Fahrenheit.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio04 = executarExercicio04;
function executarExercicio04(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 04 — Celsius para Fahrenheit ===\n");
        console.log("Fórmula: F = (C × 9/5) + 32\n");
        rl.question("Digite a temperatura em Celsius: ", (input) => {
            const celsius = parseFloat(input);
            if (isNaN(celsius)) {
                console.log("\n⚠️  Entrada inválida! Insira um número válido.");
            }
            else {
                const fahrenheit = (celsius * 9) / 5 + 32;
                console.log(`\n✅ ${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
            }
            rl.question("\nPressione Enter para voltar ao menu...", () => {
                resolve();
            });
        });
    });
}
