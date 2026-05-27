"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que conte o número de vogais em uma string.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio08 = executarExercicio08;
function executarExercicio08(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 08 — Contagem de Vogais ===\n");
        rl.question("Digite uma string: ", (input) => {
            const texto = input.toLowerCase();
            const vogais = texto.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/g);
            const quantidade = vogais ? vogais.length : 0;
            console.log(`\n✅ Texto: "${input}"`);
            console.log(`🔤 Vogais encontradas: ${quantidade}`);
            if (vogais) {
                console.log(`📋 Lista: [ ${vogais.join(", ")} ]`);
            }
            rl.question("\nPressione Enter para voltar ao menu...", () => {
                resolve();
            });
        });
    });
}
